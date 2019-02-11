import * as passwordActions from "../Actions/actionTypes/updatePasswordTypes";

const initialstate={
    loading:false,
    success:false,
    error:false,
    updatedPasswordData:null,
    errorData:null,
    data:null
}
export const updatePasswordReducer=(state=initialstate,action)=>{
switch (action.type) {
    case passwordActions.UPDATEPASSWORD_REQUEST:
        return{
            ...state,
            loading:true,
            data:action.passwordData,
            updatedPasswordData:null,
            errorData:null
        }
        break;
        case passwordActions.UPDATEPASSWORD_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:false,
            updatedPasswordData:action.data,
            errorData:null
        }
        break;
        case passwordActions.UPDATEPASSWORD_FAILURE:
        return{
            ...state,
            loading:false,
            error:true,
            success:false,
            errorData:action.fail,
            updatedPasswordData:null
        }
        break;

    default:
    return state;
}
}