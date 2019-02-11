import * as socialActions from "../Actions/actionTypes/socialIntegrationTypes";

const initialstate={
    success:false,
    error:false,
    socialIntegrationData:null,
    data:null,
    errorData:null,
}

export const SocialIntegrationReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case socialActions.ADD_SOCIAL_INTERATION_REQUEST:
            return{
                ...state,
                data:action.socialData
            }
            break;
            case socialActions.ADD_SOCIAL_INTEGRATION_SUCCESS:
            return{
                ...state,
                socialIntegrationData:action.data,
                success:true,
                error:false
            }
            break;
            case socialActions.ADD_SOCIAL_INTEGRATION_FAILURE:
            return{
                ...state,
                errorData:action.fail,
                error:true,
                success:false
            }
            break;

    
        default:
            return state;
    }
}