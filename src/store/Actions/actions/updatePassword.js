import * as passwordActions from "../actionTypes/updatePasswordTypes";

export const UpdatePasswordRequest=(passwordData)=>{
return{
    type:passwordActions.UPDATEPASSWORD_REQUEST,
    passwordData
}
}

export const UpdatePasswordSuccess=(data)=>{
    return{
        type:passwordActions.UPDATEPASSWORD_SUCCESS,
        data
    }
}
export const UpdatePasswordFailure=(fail)=>{
    return{
        type:passwordActions.UPDATEPASSWORD_FAILURE,
        fail
    }
}