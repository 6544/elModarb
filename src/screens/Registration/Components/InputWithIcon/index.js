import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  StatusBar
} from "react-native";
import { Item, Textarea, } from "native-base";

import { Styles} from "@common";
import PKR from "../Picker";
const responsiveHeight=Styles.responsiveHeight;
const responsiveWidth=Styles.responsiveWidth;
const moderateScale=Styles.moderateScale;
const fontSize=Styles.fontSize
export default class componentName extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error:null
    };
  }


  render() {
    return (
      <View style={{width:'100%',flexDirection:'row'}} >
      <Text {...this.props.TextStyle}>{this.props.text}</Text>
   {this.props.TextInput&&
     <Item regular rounded style={[Styles.InputField.Item,this.props.error&&Styles.InputField.Error.Item]} {...this.props.Item}>
   {this.props.TextInput&&<TextInput style={[Styles.InputField.TextInput]}
     stackedLabel={false}
     clearTextOnFocus={false}
             {...this.props.TextInput}               
    />}
    {this.props.TextArea&&<Textarea 
     {...this.props.TextArea}
    />}
   {this.props.Image&& <Image  style={[Styles.InputField.Image]}  {...this.props.Image} />}
    </Item>
       }
    {
      this.props.Picker&&<PKR {...this.props}/>
    }
    {this.props.error&&
    <Text style={Styles.InputField.Error.Text}>{this.props.error}</Text>}
 </View>
    );
  }
}