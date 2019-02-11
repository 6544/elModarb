import {ALL_CITIES_REQUEST,ALL_NATIONALITIES_REQUEST,ALL_NATIONALITIES_SUCCESS,ALL_NATIONALITIES_FAILURE,ALL_CITIES_OF_STATES_SUCCESS,ALL_CITIES_OF_STATES_REQUEST,ALL_CITIES_OF_STATES_FAILURE,ALL_COUNTRIES_SUCCESS,ALL_COUNTRIES_FAILURE,ALL_COUNTRIES_REQUEST,ALL_CITIES_FAILURE,ALL_CITIES_SUCCESS,SELECT_CITIES,SELECT_COUNTRY,SELECT_NATIONALITY  } from "../actionTypes/CountryTypes";

export const allCities=(country)=>{
    return{
        type:ALL_CITIES_REQUEST,
        country

    }
}
export const allCitiesSuccess=(data)=>{
    return{
        type:ALL_CITIES_SUCCESS,
        data
    }
}
export const allCountries=()=>{
    return{
        type:ALL_COUNTRIES_REQUEST
    }
}
export const allCountriesSuccess=(data)=>{
    return{
        type:ALL_COUNTRIES_SUCCESS,
        data
    }
}


export const allCitiesOfState=(state)=>{
    return{
        type:ALL_CITIES_OF_STATES_REQUEST,
        state
    }
}
export const allCitiesOfStateSuccess=(data)=>{
    return{
        type:ALL_CITIES_OF_STATES_SUCCESS,
        data
    }
}

export const allNationalities=()=>{
    return{
        type:ALL_NATIONALITIES_REQUEST
    }
}
export const allNationalitiesSuccess=(data)=>{
    return{
        type:ALL_NATIONALITIES_SUCCESS,
        data
    }
}

export const selectCity=(city)=>{
    return{
        type:SELECT_CITIES,
        city
    }
}
export const selectCountry=(country)=>{
    return{
        type:SELECT_COUNTRY,
        country
    }
}
export const selectNationality=(nationality)=>{
    return{
        type:SELECT_NATIONALITY,
        nationality
    }
}