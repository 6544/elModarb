import { put,call,takeLatest } from "redux-saga/effects";
import {VISITOR_LOGOUT_REQUEST,UPDATE_VISITOR_REQUESTINFO,UPDATE_VISITOR_SUCCESSINFO,UPDATE_VISITOR_FAILUREINFO ,VISITOR_LOGIN_REQUEST,VISITOR_LOGIN_SUCCESS,VISITOR_LOGIN_FAILURE, VISITOR_REGISTRATION_REQUEST } from "../Actions/actionTypes/visitorTypes";
import { Api } from "../../Api/visitorApi";
import { visitorLogoutSuccess,visitorLogoutFailure,RegisterVisitorFail,RegisterVisitorSuccess,updateInfoSuccess,visitorSuccessLogin,visitorFailLogin } from "../Actions/actions/visitor";
const api=new Api();
function * RequestVisitor(action){
const data=yield call(()=>api.visitorLogin(action.visitorData));

if(data.status){
    
    yield put(visitorSuccessLogin(data));
}
else{
    yield put(visitorFailLogin(data));
}
}
function * UpdateVisitor(action){
 const data=yield call(()=>api.visitorLogin(action.visitorData));
 console.log(data);
 if(data.status){
     yield put(updateInfoSuccess(data));
 }
 else{

 }

}
function * RequestRegisterVisitor(action){
    debugger;
    const data=yield call(()=>api.visitorRegister(action.visitorData))
    console.log(data);
    if(data.status){
        yield put(RegisterVisitorSuccess(data))
    }
    else{
        yield put(RegisterVisitorFail(data))
    }
}
function * RequestLogout(action){
    
    const data=yield call(()=>api.logout(action.userData))
    console.log(data);
    if(data.status){
        yield put(visitorLogoutSuccess(data))
    }
    else{
        yield put(visitorLogoutFailure(data))
    }
}
export function* watchRequestVisitor(){
yield takeLatest(VISITOR_LOGIN_REQUEST,RequestVisitor);
}
export function* watchUpdateVisitor(){
    yield takeLatest(UPDATE_VISITOR_REQUESTINFO,UpdateVisitor);
}
export function * watchRegisterVisitor(){
    yield takeLatest(VISITOR_REGISTRATION_REQUEST,RequestRegisterVisitor);
}
export function * watchLogout(){
    yield takeLatest(VISITOR_LOGOUT_REQUEST,RequestLogout);
}