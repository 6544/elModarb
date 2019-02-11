import {VISITOR_LOGOUT_REQUEST,VISITOR_LOGOUT_SUCCESS,VISITOR_LOGOUT_FAILURE,UPDATE_PHONE,UPDATE_STATEID,UPDATE_COUNTRYID,UPDATE_EMAIL,UPDATE_NATIONALITYID,UPDATE_PASSWORD,UPDATE_PREFIX,UPDATE_NAME ,VISITOR_REGISTRATION_SUCCESS,VISITOR_REGISTRATION_FAILURE,VISITOR_REGISTRATION_REQUEST, VISITOR_LOGIN_REQUEST, VISITOR_LOGIN_SUCCESS, VISITOR_LOGIN_FAILURE,UPDATE_VISITOR_REQUESTINFO,UPDATE_VISITOR_SUCCESSINFO,UPDATE_VISITOR_FAILUREINFO} from "../actionTypes/visitorTypes";

export const visitorRegistration=(visitorData)=>{
    return{
        type:VISITOR_REGISTRATION_REQUEST,
        visitorData
    }
}
export const visitorLogoutRequest=(userData)=>{
    return{
        type:VISITOR_LOGOUT_REQUEST,
        userData
    }
}
export const visitorLogoutSuccess=(data)=>{
    return{
        type:VISITOR_LOGOUT_SUCCESS,
        data
    }
}
export const visitorLogoutFailure=(fail)=>{
    return{
        type:VISITOR_LOGOUT_FAILURE,
        fail
    }
}
export const visitorLogin=(visitorData)=>{
    return{
        type:VISITOR_LOGIN_REQUEST,
        visitorData
    }
}
export const updatePhone=(phone)=>{
    return{
        type:UPDATE_PHONE,
        phone
    }
}

export const updateName=(name)=>{
    return{
        type:UPDATE_NAME,
        name
    }
}
export const updateEmail=(email)=>{
    return{
        type:UPDATE_EMAIL,
        email
    }
}
export const updatePassword=(password)=>{
    return{
        type:UPDATE_PASSWORD,
        password
    }
}
export const updatePrefix=(prefix)=>{
    return{
        type:UPDATE_PREFIX,
        prefix
    }
}
export const updateCountry=(countryID)=>{
    return{
        type:UPDATE_COUNTRYID,
        countryID
    }
}
export const updateState=(stateID)=>{
    return{
        type:UPDATE_STATEID,
        stateID
    }
}
export const updateNationality=(nationalityID)=>{
    return{
        type:UPDATE_NATIONALITYID,
        nationalityID
    }
}
export const visitorSuccessLogin=(data)=>{
    return{
        type:VISITOR_LOGIN_SUCCESS,
        data
    }
}
export const visitorFailLogin=(data)=>{
    return{
        type:VISITOR_LOGIN_FAILURE,
        data
    }
}
export const updateInfo=(updateData)=>{
 return {
     type:UPDATE_VISITOR_REQUESTINFO,
     updateData
 }
}
export const updateInfoSuccess=(data)=>{
    return {
        type:UPDATE_VISITOR_SUCCESSINFO,
        data
    }
   }
   export const RegisterVisitorRequest=(visitorData)=>{
       return{
           type:VISITOR_REGISTRATION_REQUEST,
           visitorData
       }
   }
   export const RegisterVisitorSuccess=(data)=>{
       return{
           type:VISITOR_REGISTRATION_SUCCESS,
           data
       }
   }
   export const RegisterVisitorFail=(error)=>{
       return{
           type:VISITOR_REGISTRATION_FAILURE,
           error
       }
   }
