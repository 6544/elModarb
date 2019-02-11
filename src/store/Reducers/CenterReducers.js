import {
    GET_ALL_CENTERS, GET_ALL_CENTERS_FAIL, GET_ALL_CENTERS_SUCCESS,
    REGISTER_CENTER_FAIL, REGISTER_SUCCESS, REGISTER_CENTER
} from '../Actions/actionTypes/centerTypes';
//inital : centers ,error
const initialState = {
    centers: null,
    error: null,
    center: null,
    errorsList: null,
    loading: false,
    loadingCenter: false,
    newCenter: null,
}

const centersReducers = (state = initialState, action) => {
    debugger;
    debugger;
    switch (action.type) {
        case GET_ALL_CENTERS:


            return {
                ...state,
                loading: true,
            }
            break;
        case GET_ALL_CENTERS_SUCCESS:


            return {
                ...state,
                loading: false,
                error: false,
                centers: action.recievedCenters
            }
            break;

        case GET_ALL_CENTERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                centers: null
            };

            break;
        case REGISTER_CENTER:
        
            return {
                ...state,
                newCenter: action.newCenter,
                loadingCenter: true,
                error: false,
                errorsList: null,
                newCenter:null

            };
            break;
        case REGISTER_CENTER_FAIL:


            return {
                ...state,
                errorsList: action.error,
                loadingCenter: false,
                error: true,
                center: null
            };
            break;
        case REGISTER_SUCCESS:
            debugger;
            return {
                ...state,
                center: action.result,
                loadingCenter: false,
                error: false
            };
            break;
        default:
            return state;
    }
}
export default centersReducers;