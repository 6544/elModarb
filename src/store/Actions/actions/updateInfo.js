import * as infoTypes from "../actionTypes/updateInfoTypes";

export const updateInfoRequest=(infoData)=>{
    return{
        type:infoTypes.UPDATEINFO_REQUEST,
        infoData

    }
}

export const updateInfoSuccess=(data)=>{
    return{
        type:infoTypes.UPDATEINFO_SUCCESS,
        data
    }
}

export const updateInfoFailure=(fail)=>{
    return{
        type:infoTypes.UPDATEINFO_FAILURE,
        fail
    }
}


export const updateProfessionalCardRequest=(professionalData)=>{
    return{
        type:infoTypes.UPDATEPROFESSIONALCARD_REQUEST,
        professionalData

    }
}

export const updateProfessionalCardSuccess=(data)=>{
    return{
        type:infoTypes.UPDATEPROFESSIONALCARD_SUCCESS,
        data
    }
}

export const updateProfessionalCardFailure=(fail)=>{
    return{
        type:infoTypes.UPDATEPROFESSIONALCARD_FAILURE,
        fail
    }
}