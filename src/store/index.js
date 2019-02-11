import { createStore,combineReducers,applyMiddleware } from "redux";
import  VisitorReducer  from "../store/Reducers/visitorReducer";
import { watchRequestVisitor ,watchRegisterVisitor,watchLogout} from "../store/saga/visitorSaga";
import createSagaMiddleWare from 'redux-saga';
import trainersReducers from "./Reducers/TrainersReducer";
import AdvertismentReducer from "./Reducers/AdvertismentReducer";
import { watchRequestAdvertisment,watchAllAdvertisments } from "./saga/advertismentSaga";
import countryReducer from "./Reducers/countryReducer";
import { watchRequestCities,watchRequestCountries,watchRequestNationalities } from "../store/saga/countrySaga";
import centersReducers from "./Reducers/CenterReducers";
import { watchAddNewTrainer, watchFetchTrainers } from "./saga/trainersSaga";
import { watchAddNewCenter, watchFetchCenters } from "./saga/centersSaga";
import { watchSearch} from "./saga/searchSaga";
import { reducer as formReducer } from "redux-form";
import { updatePasswordReducer } from "./Reducers/updatePasswordReducer";
import { watchUpdatePassword } from "./saga/updatePasswordSaga";
import { watchUpdateInfo,watchUpdateProfessional } from "./saga/updateInfoSaga";
import { updateInfoReducer } from "./Reducers/updateInfoReducer";
import { watchAddSocial } from "./saga/addSocialSaga";
import { SocialIntegrationReducer } from "./Reducers/socialIntegrationReducer";
import searchReducer from "./Reducers/searchReducer";
//import searchReducer from "./Reducers/searchReducer";
const saga=createSagaMiddleWare();
const reducers=combineReducers({
visitorReducer:VisitorReducer,
advertismentReducer:AdvertismentReducer,
countryReducer:countryReducer,
centersReducers:centersReducers,
trainersReducers:trainersReducers,
updatePasswordReducer:updatePasswordReducer,
updateInfoReducer:updateInfoReducer,
socialReducer:SocialIntegrationReducer,
form:formReducer,
searchReducer:searchReducer,
//searchReducer:searchReducer,
})
const store=createStore(reducers,applyMiddleware(saga));

saga.run(watchRequestVisitor);
saga.run(watchRequestAdvertisment);
saga.run(watchRegisterVisitor);
saga.run(watchRequestCities);
saga.run(watchRequestCountries);
saga.run(watchRequestNationalities);
saga.run(watchAddNewTrainer);
saga.run(watchFetchTrainers);
saga.run(watchAddNewCenter);
saga.run(watchFetchCenters);
saga.run(watchUpdatePassword);
saga.run(watchUpdateInfo);
saga.run(watchAddSocial);
saga.run(watchSearch);
saga.run(watchUpdateProfessional);
saga.run(watchLogout);
saga.run(watchAllAdvertisments);
//saga.run(watchRequestCitiesOfState);
//saga.run(watchSearchPlace);
//saga.run(watchSearch);

export default store;