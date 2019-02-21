import { put, call, takeLatest } from "redux-saga/effects";
import * as countryActionsTypes from "../Actions/actionTypes/CountryTypes";
import Api from "../../Api/countryApi";
import * as countryActions from "../Actions/actions/country";
import Store from '../index';
function* RequestCountries(action) {
    const data = yield call(Api.getAllCountries);

    if (data.status) {

        yield put(countryActions.allCountriesSuccess(data.data));
    }
    else {
        // yield put(coutr(data));
    }
}

function* RequestCities(action) {
    const data = yield call(() => Api.getAllCities(action.country.id));
    if (data.status) {
        yield put(countryActions.allCitiesSuccess(data.data))
      }
    else {
        yield put({ type: 'ALL_CITIES_OF_STATES_FAILURE', error })
    }
}

function* RequestCitiesOfStates(action) {
      
   const data = yield call(() => Api.getAllCitiesOfState(action.state.id)); //change

   if (data.status) {

       yield put(countryActions.allCitiesOfStateSuccess(data.data));
   }
   else {
       // yield put(countryActions.(data));
   }
}


















function* RequestNationalities(action) {
    const data = yield call(Api.getAllNationalities);

    if (data.status) {

        yield put(countryActions.allNationalitiesSuccess(data.data));
    }
    else {
        // yield put(visitorFailLogin(data));
    }
}


export function* watchRequestNationalities() {
    yield takeLatest(countryActionsTypes.ALL_NATIONALITIES_REQUEST, RequestNationalities);
}
export function* watchRequestCities() {
    yield takeLatest(countryActionsTypes.ALL_CITIES_REQUEST, RequestCities)
}
export function* watchRequestCountries() {
     ;
    yield takeLatest(countryActionsTypes.ALL_COUNTRIES_REQUEST, RequestCountries)
}
export function* watchRequestCitiesOfState() {
    ;
   yield takeLatest(countryActionsTypes.ALL_CITIES_OF_STATES_REQUEST, RequestCitiesOfStates)
}