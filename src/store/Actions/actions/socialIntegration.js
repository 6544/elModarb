import * as socialActions from "../actionTypes/socialIntegrationTypes";

export const socialIntegrationRequest=(socialData)=>{
    return{
        type:socialActions.ADD_SOCIAL_INTERATION_REQUEST,
        socialData
    }
}
export const socialIntegrationSuccess=(data)=>{
    return{
        type:socialActions.ADD_SOCIAL_INTEGRATION_SUCCESS,
        data
    }
}
export const socialIntegrationFailure=(fail)=>{
    return{
        type:socialActions.ADD_SOCIAL_INTEGRATION_FAILURE,
        fail
    }
}