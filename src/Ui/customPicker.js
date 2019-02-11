// import React from "react";
// import { Picker,Label, ListItem } from "native-base";
// import { View,Platform } from "react-native";
// import localization from "../localization/localization";
// import { Colors } from "../assets/colors";
// import Icon from "react-native-vector-icons/Ionicons";
// // meta:{touched,error,warning},input:{onchange,...restInput}
// export const RenderCustomPicker=(props)=>{
// return(
//     <View style={[{flexDirection:'row' ,flex:1 ,alignSelf:'center',
//     width:'90%',

//     },props.containerStyle]}>
//     <Label style={[{
//     backgroundColor:'orange',color:'white',
//     flex:0.6,
//     width:'30%',
//     flexWrap:'wrap',
//     textAlign:'center',
//     textAlignVertical:'center'},props.style]}
//    >{props.label}</Label>
//     <Picker
//                 mode="dropdown"
//                 onValueChange={props.input.onChange}
//                 // {props.onchangeValue}
//                 selectedValue={props.input.value}

//                iosIcon={<Icon name="md-arrow-dropdown" color={Colors.orange} />}
//                 style={[{
//                     marginRight:'10%',
//                     flex:0.4,
//                     backgroundColor:Colors.white,
//             },props.picker]}
//                 placeholder={props.placeholder}
//                 placeholderStyle={{ flex:1,color: "#bfc6ea",textAlign:'center'}}
//                 placeholderIconColor="black">
//                 {props.data}
//               </Picker>  
//               {props.meta.touched &&
//     ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
//     </View>




//     //picker width -->238 flex:0.4
//     )
// }




import React from "react";
import { Picker, Label } from "native-base";
import { View, Platform } from "react-native";
import localization from "../localization/localization";
import { Colors } from "../assets/colors";
import Icon from "react-native-vector-icons/Ionicons";
export const CustomPicker = (props) => {
    // return(
    //     <View style={[{flexDirection:'row' ,flex:1 ,alignSelf:'center',
    //     width:'90%',

    //     },props.containerStyle]}>
    //     <Label style={[{
    //     backgroundColor:'orange',color:'white',
    //     flex:0.6,
    //     width:'30%',
    //     flexWrap:'wrap',
    //     textAlign:'center',
    //     textAlignVertical:'center'},props.style]}
    //    >{props.label}</Label>
    //     <Picker
    //                 mode="dropdown"
    //                 onValueChange={props.input.onChange}
    //                 // {props.onchangeValue}
    //                 selectedValue={props.input.value}

    //                iosIcon={<Icon name="md-arrow-dropdown" color={Colors.orange} />}
    //                 style={[{
    //                     marginRight:'10%',
    //                     flex:0.4,
    //                     backgroundColor:Colors.white,
    //             },props.picker]}
    //                 placeholder={props.placeholder}
    //                 placeholderStyle={{ flex:1,color: "#bfc6ea",textAlign:'center'}}
    //                 placeholderIconColor="black">
    //                 {props.data}
    //               </Picker>  
    //               {props.meta.touched &&
    //     ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
    //     </View>




    //     //picker width -->238 flex:0.4
    //     )
    return (
        // <View style={[{flexDirection:'row',width:'90%',alignSelf:'center',justifyContent:'space-evenly'},props.style]}>
        //              <Label style={[{backgroundColor:'orange',color:'white',flex:0.3, textAlign:'center',
        //                textAlignVertical:'center'},props.style]}
        //               >{props.label}</Label>
        //               <Picker
        //             mode="dropdown"
        //             onValueChange={props.onchangeValue}
        //             selectedValue={props.selected}

        //             iosIcon={<Icon name="ios-arrow-down-outline" />}
        //             style={{flex:0.7,textAlign:'left',backgroundColor:Colors.white}}
        //             placeholder={props.placeholder}
        //             placeholderStyle={{ color: "#bfc6ea",flex:1,textAlign:'left'}}
        //             placeholderIconColor="#007aff">
        //             {props.data}
        //           </Picker> 

        //                </View>
        //label style flex:0.9 width:82
        <View style={[{
            flexDirection: 'row', flex: 1, alignSelf: 'center',
            width: '90%',

        }, props.containerStyle]}>
            <Label style={[{
                backgroundColor: 'orange', color: 'white',
                flex: 0.6,
                width: '30%',
                flexWrap: 'wrap',
                textAlign: 'center',
                textAlignVertical: 'center'
            }, props.style]}>
            {props.label}
            </Label>


            <Picker
                mode="dropdown"
                onValueChange={props.onchangeValue}
                selectedValue={props.selected}

                iosIcon={<Icon name="md-arrow-dropdown" color={Colors.orange} />}
                style={[{
                    marginRight: '10%',
                    flex: 0.4,
                    backgroundColor: Colors.white,
                }, props.picker]}

                placeholder={props.placeholder}
                placeholderStyle={{ flex: 1, color: "#bfc6ea", textAlign: 'center' }}
                placeholderIconColor="black">
                {props.data}
            </Picker>
        </View>
        //picker width -->238 flex:0.4
    )
}