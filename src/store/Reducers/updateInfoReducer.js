import * as infoTypes from "../Actions/actionTypes/updateInfoTypes";

const initialstate={
    loading:false,
    error:false,
    success:false,
    data:null,
    errorData:null,
    loadingProfessional:false,
    updateInfoSuccessData:null,
    professionalSucess:null,
    professionalError:null,
    professionalSuccessData:null,
    professionalErrorData:null
}

export const updateInfoReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case infoTypes.UPDATEINFO_REQUEST:
            return{
                ...state,
                loading:true,
                data:action.infoData
            }
            break;
            case infoTypes.UPDATEINFO_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                error:false,
                updateInfoSuccessData:action.data
            }
            break;
            case infoTypes.UPDATEINFO_FAILURE:
            return{
                ...state,
                loading:false,
                success:false,
                error:true,
                errorData:action.errorData
            }
            break;
            case infoTypes.UPDATEPROFESSIONALCARD_REQUEST:
            return{
                ...state,
                loadingProfessional:true,
                data:action.professionalData,
                professionalSuccessData:null,
                professionalErrorData:null

            }
            break;
            case infoTypes.UPDATEPROFESSIONALCARD_SUCCESS:
            return{
                ...state,
                loadingProfessional:false,
                professionalError:false,
                professionalSucess:true,
                professionalSuccessData:action.data
            }
            break;
            case infoTypes.UPDATEPROFESSIONALCARD_FAILURE:
            return{
                ...state,
                loadingProfessional:false,
                professionalError:true,
                professionalSucess:false,
                professionalErrorData:action.fail
            }
            break;
    
        default:
            return state;
    }
}