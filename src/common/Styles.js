import { Dimensions, Platform } from "react-native";
import Color from "./Color";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  moderateScale,
  
  
} from "./ResponsiveDimentions";
const fontSize={
  small: responsiveFontSize(2.5),
  medium: responsiveFontSize(3),
  large: responsiveFontSize(8)
}
const { height, width, heightWindow } = Dimensions.get("window");

const Styles = {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
  moderateScale,
  fontSize: {
    small: responsiveFontSize(2.5),
    medium: responsiveFontSize(3),
    large: responsiveFontSize(8)
  },
  InputField:{
    Error:{
     Item:{
      borderWidth:1,
      borderColor:'red',
      
     },
     Text:{
       color:'red',
       fontSize:responsiveFontSize(1.8),
       marginTop:moderateScale(3),
       textAlign:'center'

     }
    },
    ContactUs:{
      Item:{backgroundColor:Color.white,
        marginRight:moderateScale(10),
        marginLeft:moderateScale(10),
        marginTop:moderateScale(3),
        height:responsiveHeight(5),
        borderRadius:10,
      },
      TextArea:{
        Item:{
          height:responsiveHeight(10),
          marginRight:moderateScale(10),
        marginLeft:moderateScale(10),
        marginTop:moderateScale(3),
        borderRadius:10,
        backgroundColor:Color.white
        },
        TextInput:{
          textAlign:'right',
          flex:1,fontSize:fontSize.small,
          height:responsiveHeight(5),
          paddingRight:moderateScale(5),
          height:'100%',
          paddingTop:moderateScale(2),
        },
      },
      TextInput:{
        textAlign:'right',
        flex:1,fontSize:fontSize.small,
        height:responsiveHeight(5),
        paddingRight:moderateScale(5),
      },
    },
    Register:{
      Text:{
        width:'30%',
        height:responsiveHeight(7),
        textAlign:'center',
        backgroundColor:'orange',
        alignSelf: 'center',
        fontSize:responsiveFontSize(2.5),
        color:'black',
        padding: moderateScale(5),
      },
      Item:{
        width:'60%',
        backgroundColor:Color.white,
        marginRight:moderateScale(2),
        marginLeft:moderateScale(5),
        height:responsiveHeight(7),
        borderRadius:2,
      },
    },
    Settings:{
      Item:{
        backgroundColor:Color.white,
        marginRight:moderateScale(4),
        marginLeft:moderateScale(10),
        marginTop:moderateScale(3),
        height:responsiveHeight(5),
      },
      TextInput:{
        textAlign:'right',flex:1,fontSize:responsiveFontSize(2),height:responsiveHeight(5)
      },
      Image:{
        width:responsiveWidth(4),
        height:responsiveHeight(3),
        resizeMode:'contain',
        marginHorizontal:moderateScale(5)
  },
  ButtonSubmit:{
    Item:{ 
      backgroundColor:Color.redLighter,
      alignSelf: 'center',
      width:responsiveWidth(30),
      height:responsiveHeight(5),
      marginTop:moderateScale(8),
      borderWidth:0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,

    },
    Button:{
      backgroundColor:'transparent',
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    Text:{
        color:Color.white,
        fontWeight:'bold',
        fontSize:fontSize.small
    }
  },
    },
    Item:{backgroundColor:Color.white,
          marginRight:moderateScale(10),
          marginLeft:moderateScale(10),
          marginTop:moderateScale(5),
          height:responsiveHeight(8),
        },
    TextInput:{
      textAlign:'right',flex:1,fontSize:fontSize.small,height:responsiveHeight(8)
    },
    Image:{
            width:responsiveWidth(6),
            height:responsiveHeight(5),
            resizeMode:'contain',
            marginHorizontal:moderateScale(5)
      },

  },
  ButtonSubmit:{
    Item:{ 
      backgroundColor:Color.redLighter,
      marginRight:moderateScale(10),
      marginLeft:moderateScale(10),
      height:responsiveHeight(9),
      marginTop:moderateScale(8),
      borderWidth:0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,

    },
    Button:{
      backgroundColor:'transparent',
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
    },
    Text:{
        color:Color.white,
        fontWeight:'bold',
        fontSize:fontSize.small
    }
  },
  ButtonBottom:{
    Container:{
      bottom:0,
      right:0,
      left:0,
      backgroundColor:Color.redLighter
    },
    Button:{
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      height: responsiveHeight(10),
    },
    Text:{
      fontSize:fontSize.medium,
      color:Color.white
    }
  },
  width: Dimensions.get("window").width,
  height: Platform.OS !== "ios" ? height : height - 20,
  navBarHeight: Platform !== "ios" ? height - heightWindow : 0,
  headerHeight: Platform.OS === "ios" ? 40 : 56,

  thumbnailRatio: 1.2, // Thumbnail ratio, the product display height = width * thumbnail ratio

 
  /** EHS EDITING */
  BottomTabContainer: {
    backgroundColor: Color.tabbar,
    borderTopWidth: 0,
    height: "10%",
    FontFamily: "Bold"
  },

  BottomtabIcon: {
    fontSize: 30,
    color: Color.tabbarIconColor
  },
  BottomtabText: {
    width: 100,
    textAlign: "center",
    fontSize: 20,
    color: Color.tabbarTint,
    fontWeight: "300"
  },

  FontSize: {
    tiny: 12,
    small: 14,
    medium: 16,
    big: 18,
    large: 20
  },
  IconSize: {
    TextInput: 25,
    ToolBar: 18,
    Inline: 20,
    SmallRating: 14
  },
  FontFamily: {}
};



export default Styles;
