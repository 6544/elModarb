import { VISITOR_LOGOUT_SUCCESS, VISITOR_LOGOUT_REQUEST, VISITOR_LOGOUT_FAILURE, UPDATE_PHONE, UPDATE_STATEID, UPDATE_NATIONALITYID, UPDATE_PASSWORD, UPDATE_COUNTRYID, UPDATE_EMAIL, UPDATE_PREFIX, UPDATE_NAME, UPDATE_VISITOR_REQUESTINFO, UPDATE_VISITOR_SUCCESSINFO, UPDATE_VISITOR_FAILUREINFO, VISITOR_REGISTRATION_REQUEST, VISITOR_REGISTRATION_SUCCESS, VISITOR_REGISTRATION_FAILURE, VISITOR_LOGIN_REQUEST, VISITOR_LOGIN_FAILURE, VISITOR_LOGIN_SUCCESS } from "../Actions/actionTypes/visitorTypes";
const initialstate = {
    loading: false,
    visitor: null,
    success: false,
    error: false,
    data: null,
    formData: null,
    name: null,
    email: null,
    password: null,
    countryID: null,
    nationalityID: null,
    stateID: null,
    confirmPassword: null,
    phone: null,
    loadingLogout: false,
    logoutData: null,
    errorData:null

}
const VisitorReducer = (state = initialstate, action) => {
    switch (action.type) {
        case VISITOR_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                formData: action.visitorData
            }
            break;
        case VISITOR_LOGOUT_REQUEST:
            return {
                ...state,
                loadingLogout: true,
                formData: action.userData

            }
            break;
        case VISITOR_LOGOUT_SUCCESS:
            return {
                ...state,
                loadingLogout: false,
                visitor: null,
                success: true,
                data:null,
                logoutData: action.data
            }
            break;
        case VISITOR_LOGOUT_FAILURE:
        return{
            ...state,
            loadingLogout:false,
            success:false,
            error:true,
            errorData:action.fail
        }
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name
            }
            break;
        case UPDATE_EMAIL:
            return {
                ...state,
                email: action.email

            }
            break;
        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
            break;
        case UPDATE_COUNTRYID:
            return {
                ...state,
                countryID: action.countryID
            }
            break;
        case UPDATE_NATIONALITYID:
            return {
                ...state,
                nationalityID: action.nationalityID
            }
        case UPDATE_STATEID:
            return {
                ...state,
                stateID: action.stateID
            }
            break;
        case UPDATE_PHONE:
            return {
                ...state,
                phone: action.phone
            }
            break;
        case VISITOR_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                visitor: action.data.data.user,
                data: action.data
            }
            break;
        case VISITOR_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: action.data,
                visitor: null
            }
            break;
        case UPDATE_VISITOR_REQUESTINFO:
            return {
                ...state,
                loading: true,
                data: action.updateData
            }
            break
        case UPDATE_VISITOR_SUCCESSINFO:
            return {
                ...state,
                loading: false,
                success: true
            }
            break;
        case VISITOR_REGISTRATION_REQUEST:
            return {
                ...state,
                loading: true,
                data: action.visitorData
            }
            break;
        case VISITOR_REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                visitor: action.data
            }
            break;
        case VISITOR_REGISTRATION_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                visitor: action.error
            }
            break;

        default:
            return state;
    }
}
export default VisitorReducer;