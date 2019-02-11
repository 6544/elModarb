import { ALL_CITIES_REQUEST, ALL_CITIES_SUCCESS, ALL_CITIES_FAILURE, ALL_COUNTRIES_REQUEST, ALL_COUNTRIES_SUCCESS, ALL_COUNTRIES_FAILURE, 
    ALL_CITIES_OF_STATES_FAILURE,ALL_CITIES_OF_STATES_SUCCESS,ALL_CITIES_OF_STATES_REQUEST,
    ALL_NATIONALITIES_REQUEST, ALL_NATIONALITIES_SUCCESS, ALL_NATIONALITIES_FAILURE, SELECT_CITIES, SELECT_COUNTRY, SELECT_NATIONALITY } from "../Actions/actionTypes/CountryTypes";
const initialstate = {
    success: false,
    error: false,
    countries: null,
    nationalities: null,
    cities: null,
    selectCity: null,
    selectCountry: null,
    selectNationality: null,
    prefix: null,
    citiesOfState:null
}

export default countryReducer = (state = initialstate, action) => {
    debugger;
    switch (action.type) {
        case ALL_COUNTRIES_REQUEST:
            return {
                ...state
            }
            break;
        case ALL_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.data
            }
            break;
        case ALL_COUNTRIES_FAILURE:
            return {
                ...state,
                countries: null,
                success: false,
                error: true
            }
            break;



            case ALL_CITIES_OF_STATES_REQUEST:
          
            return {
                ...state,
                state:action.state //change
            }
            break;
              
        case ALL_CITIES_OF_STATES_SUCCESS:
            return {
                ...state,
                citiesOfState: action.data,
                success:true,
                error:false
            }
            break;
        case ALL_CITIES_OF_STATES_FAILURE:
            return {
                ...state,
                citiesOfState: null,
                success: false,
                error: true
            }
            break;

        case ALL_CITIES_REQUEST:
            return {
                ...state,
                country: action.country,
                prefix: action.country.phonecode
            }
            break;
        case ALL_CITIES_SUCCESS:
            return {
                ...state,
                cities: action.data,
                success: true
            }
            break;
        case ALL_CITIES_FAILURE:
            return {
                ...state,
                cities: null,
                success: false,
                error: true
            }
            break;
        case ALL_NATIONALITIES_REQUEST:
            return {
                ...state,
            }
            break;
        case ALL_NATIONALITIES_SUCCESS:
            return {
                ...state,
                nationalities: action.data
            }
            break;
        case SELECT_COUNTRY:
            return {
                ...state,
                selectCountry: action.country
            }
            break;
        case SELECT_CITIES:
            return {
                ...state,
                selectCity: action.city
            }
            break;
        case SELECT_NATIONALITY:
            return {
                ...state,
                selectNationality: action.nationality
            }
        default:
            return state
    }
}