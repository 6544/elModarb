import {GET_ALL_CENTERS,GET_ALL_CENTERS_FAIL,GET_ALL_CENTERS_SUCCESS,REGISTER_CENTER,REGISTER_CENTER_FAIL,REGISTER_SUCCESS} from '../actionTypes/centerTypes';
    export const registerCenterAction=(newCenter)=>{
        debugger;
    return{
        type:REGISTER_CENTER,
        newCenter
    }
}
export const getAllCenters=()=>{
    debugger;
    return{
        type:GET_ALL_CENTERS
    }
}
export const getAllCentersSuccess=(errState)=>{
    debugger;
   
   return{
       type:GET_ALL_CENTERS_SUCCESS,
       errState
   }
}

export const getAllCentersFailed=(errState)=>{
    debugger;
   return{
       type:GET_ALL_CENTERS_FAIL,
       errState
   }
}

export const registerCenterSuccess=(errState)=>{
    debugger;
   
    return {
        type:REGISTER_SUCCESS,
        errState
    }
}
export const registerCenterFail=(errState)=>{
    debugger;
   return {
       type:REGISTER_CENTER_FAIL,
       errState
   }
}