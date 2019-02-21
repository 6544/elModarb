import React from "react";
import {
  Text,
  View,
  Touchable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listActive: false,
      label: this.props.label,
      data: this.props.data
    };
  }

  _handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  _handleTouch = () => {
    this.props.onTouch(this.props.name);
  };
  render() {
    const { error } = this.props;
    return (
      <View
        style={[
          {
            width: "100%",
            flexDirection: "column",
            height: this.state.listActive ? this.props.data.length * 8 : 40
          },
          this.props.style
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            this.setState({ listActive: !this.state.listActive }, () => {
              if (!this.state.listActive) {
                this._handleTouch();
              }
            });
            this.props.tooglePicker(!this.state.listActive);
          }}
          style={[styles.wrapper, this.props.PickerStyle]}
        >
          <Ionicons
            style={[styles.icon, this.props.IconStyle]}
            name="ios-arrow-down"
            size={20}
          />

          <Text style={[styles.label, this.props.LabelStyle]}>
            {this.state.label}
          </Text>
        </TouchableOpacity>
        {this.state.listActive && (
          <View style={styles.dropDown}>
            <ScrollView contentContainerStyle={{}}>
              {this.state.data.map(item => (
                <Text
                  onPress={() => {
                    this.setState({ listActive: false, label: item });
                    this.props.tooglePicker(!this.state.listActive);

                    // this.props.result(item);
                    // this._handleChange(item);
                  }}
                  key={item}
                  style={styles.dropDownText}
                >
                  {item}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
        <View>{error && <Text style={styles.error}>{error}</Text>}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    paddingVertical: 5
  },
  icon: {
    alignSelf: "center",
    height: "100%",
    textAlign: "center",
    paddingVertical: 5
  },
  label: {
    fontSize: 20,
    fontWeight: "200",
    color: "black",
    textAlign: "center",
    flex: 1,
    height: 40
  },
  dropDown: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 5,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
    height: 100,
    borderRadius: 10
  },
  dropDownText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  error: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#dca852"
  }
});
