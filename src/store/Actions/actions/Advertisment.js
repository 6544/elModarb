import { ALL_ADVERTISMENTS_FAILURE,ALL_ADVERTISMENTS_REQUEST,ALL_ADVERTISMENTS_SUCCESS,ADD_ADVERTISMENT_REQUEST,ADD_ADVERTISMENT_SUCCESS,ADD_ADVERTISMENT_FAILURE } from "../actionTypes/AdvertismentTypes";

export const AddAdvertismentRequest=(advData)=>{
    return{
        type:ADD_ADVERTISMENT_REQUEST,
        advData
    }
}
export const AddAdvertismentSuccess=(responseData)=>{
    return{
        type:ADD_ADVERTISMENT_SUCCESS,
        responseData
    }
}
export const AddAdvertismentFailure=(data)=>{
    return{
        type:ADD_ADVERTISMENT_FAILURE,
        data
    }
}
export const AllAdvertismentsRequest=()=>{
    return {
        type:ALL_ADVERTISMENTS_REQUEST
    }
}
export const AllAdvertismentsSuccess=(data)=>{
    return{
        type:ALL_ADVERTISMENTS_SUCCESS,
        data
    }
}
export const AllAdvertismentsFailure=(fail)=>{
return{
    type:ALL_ADVERTISMENTS_FAILURE,
    fail
}
}