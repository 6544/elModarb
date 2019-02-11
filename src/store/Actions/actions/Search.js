import {SEARCH,SEARCH_FAIL,SEARCH_SUCCESS} from '../actionTypes/searchTypes';
    export const search=(newObject)=>{
     debugger;
    return{
        type:SEARCH,
        newObject
    }
}
export const searchSuccess=(errState)=>{
      
   
    return {
        type:SEARCH_SUCCESS,
        errState
    }
}
export const searchFail=(errState)=>{
     

   return {
       type:SEARCH_FAIL,
       errState
   }
}