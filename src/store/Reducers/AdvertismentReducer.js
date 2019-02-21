import { ALL_ADVERTISMENTS_FAILURE,ALL_ADVERTISMENTS_SUCCESS,ALL_ADVERTISMENTS_REQUEST,ADD_ADVERTISMENT_REQUEST,ADD_ADVERTISMENT_SUCCESS,ADD_ADVERTISMENT_FAILURE } from "../Actions/actionTypes/AdvertismentTypes";
import { AddAdvertisment } from "../Actions/actions/Advertisment";

const initialstate={
   advertisment:null,
    success:false,
    error:false,
    requestAdvertisment:null,
    loading:false,
    advertisments:null,
    errorData:null
    

}

export default advertismentReducer=(state=initialstate,action)=>{
   // debugger;
    switch (action.type) {
        case ADD_ADVERTISMENT_REQUEST:
            return{
                ...state,
                requestAdvertisment:action.advData
            }
            break;
            case ADD_ADVERTISMENT_SUCCESS:
            return{
                ...state,
                success:true,
                advertisment:action.responseData

            }
            break;
            case ALL_ADVERTISMENTS_REQUEST:
            return{
                ...state,
                loading:true,
            
            }
            break;
            case ALL_ADVERTISMENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                advertisments:action.data
            }
            break;
            case ALL_ADVERTISMENTS_FAILURE:
            return{
                ...state,
                loading:false,
                errorData:action.fail,
                advertisments:null
                
            }
            case ADD_ADVERTISMENT_FAILURE:
            return{
                ...state,
                success:false,
                error:true
            }
    
        default:
        return state
            break;
    }
}