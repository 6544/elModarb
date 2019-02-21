import { put,call,takeLatest } from "redux-saga/effects";
import Api  from "../../Api/advertismentApi";
import { AllAdvertismentsSuccess,AllAdvertismentsFailure,AddAdvertisment,AddAdvertismentSuccess,AddAdvertismentFailure } from "../Actions/actions/Advertisment";
import { ALL_ADVERTISMENTS_FAILURE,ALL_ADVERTISMENTS_REQUEST,ALL_ADVERTISMENTS_SUCCESS,ADD_ADVERTISMENT_REQUEST} from "../Actions/actionTypes/AdvertismentTypes";

const api=new Api();
function * RequestAdvertisment(action){
    console.log(action)
const data=yield call(()=>api.addAdvertisment(action.advData));
console.log(data);
if(data.status){
    
    yield put(AddAdvertismentSuccess(data.data));
}
else{
    yield put(AddAdvertismentFailure(data));
}
}
function* getAllAdvertisments(){
   // debugger;
    const data=yield call(api.getAllAdvertisments);
   // debugger;
    if(data.status){
        yield put(AllAdvertismentsSuccess(data.data.advertisements))
    }
    else{
        yield put(AllAdvertismentsFailure(data));
    }
}

export function* watchRequestAdvertisment(){
yield takeLatest(ADD_ADVERTISMENT_REQUEST,RequestAdvertisment);
}
export function* watchAllAdvertisments(){
    yield takeLatest(ALL_ADVERTISMENTS_REQUEST,getAllAdvertisments)
}
