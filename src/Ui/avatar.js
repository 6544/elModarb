import React from 'react';

import {TouchableOpacity,View  } from "react-native";
import { Icon, Thumbnail } from 'native-base';
import { Colors } from '../assets/colors';
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Circle";

export const Avatar=(props)=>(
   
 props.image?
//      <TouchableOpacity style={{
//     borderWidth:1,
//     borderColor:'rgba(0,0,0,0.2)',
//     alignItems:'center',
//     justifyContent:'center',
//     width:50,
//     height:50,
//     backgroundColor:'#fff',
//     borderRadius:100,
//   }}
//    >
  
//     <Image source={{uri: `http://modarrebarabi.sailaway-eg.com/public/${props.image.name}`}}
//     loadingIndicatorSource={require('../assets/images/modareb.png')}
//     style={{width:'40%',height:'30%'}}
//     />
//     </TouchableOpacity>

     <Thumbnail circle 
     source={{ 

       uri: `http://modarrebarabi.sailaway-eg.com/public/${props.image.name}`
    


    }} 
    defaultSource={require('../assets/images/modareb.png')}
    
    /> 
//          <TouchableOpacity style={{
//     borderWidth:1,
//     borderColor:'rgba(0,0,0,0.2)',
//     alignItems:'center',
//     justifyContent:'center',
//     width:50,
//     height:50,
//     backgroundColor:'#fff',
//     borderRadius:100,
//   }}
//    >
//     <Image
//         indicatorProps={{
//             size:20,
//             borderWidth:0
//         }}
//      source={{ 

//         uri: `http://modarrebarabi.sailaway-eg.com/public/${props.image.name}`
    
//      }} 
//      indicator={ProgressBar}
//      style={{width:60,height:50,borderRadius:5}}
    
//     />
//      </TouchableOpacity>


    :
  

    <TouchableOpacity
    style={{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        //alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:100,
      }}
      >
  {props.page?<Icon name="person" style={{alignSelf:'center'}} size={30} color="#01a699" />:<Icon name="person"  size={30} color="#01a699" />}
    
  
 </TouchableOpacity>


)