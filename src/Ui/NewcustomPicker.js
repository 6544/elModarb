// import React from "react";
// import { Picker,Label, ListItem } from "native-base";
// import { View,Platform } from "react-native";
// import localization from "../localization/localization";
// import { Colors } from "../assets/colors";
// import Icon from "react-native-vector-icons/Ionicons";
// import { AppText } from "./appText";
// // meta:{touched,error,warning},input:{onchange,...restInput}
// export const RenderCustomPicker=(props)=>{
    
//     debugger;
//     if(props.input.name==="country"){
//         if(props.input.value){
//             props.onchangeValue(props.input.value);
//         }
//     }
    
//     alert(props.val + props.input.name)
// return(
//     <View>
//         <ListItem>
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
//                 selectedValue={props.val}
                
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
//               </View>
//               </ListItem>
//               {props.meta.touched &&
//     ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
//     </View>
    
   
 

//     //picker width -->238 flex:0.4
//     )
// }


import React from "react";
import { Picker,Label, ListItem } from "native-base";
import { View,Platform } from "react-native";
import localization from "../localization/localization";
import { Colors } from "../assets/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { AppText } from "./appText";
// meta:{touched,error,warning},input:{onchange,...restInput}
export const RenderCustomPicker=(props)=>{
    debugger;
    if(props.input.name==="country"){
        if(props.input.value){
            props.onchangeValue(props.input.value);
        }
    }
return(
    <View>
        <ListItem>
    <View style={[{flexDirection:'row' ,flex:1 ,alignSelf:'center',
    width:'90%',
    
    },props.containerStyle]}>
    <Label style={[{
    backgroundColor:'orange',color:'white',
    flex:0.6,
    width:'30%',
    flexWrap:'wrap',
    textAlign:'center',
    textAlignVertical:'center'},props.style]}
   >{props.label}</Label>
    <Picker
                mode="dropdown"
                onValueChange={props.input.onChange}
                // {props.onchangeValue}
                selectedValue={props.input.value}
                
               iosIcon={<Icon name="md-arrow-dropdown" color={Colors.orange} />}
                style={[{
                    marginRight:'10%',
                    flex:0.4,
                    backgroundColor:Colors.white,
            },props.picker]}
                placeholder={props.placeholder}
                placeholderStyle={{ flex:1,color: "#bfc6ea",textAlign:'center'}}
                placeholderIconColor="black">
                {props.data}
              </Picker>  
              </View>
              </ListItem>
              {props.meta.touched &&
    ((props.meta.error && <AppText style={{ color: Colors.red }} text={props.meta.error} />))}
    </View>
    
   
 

    //picker width -->238 flex:0.4
    )
}