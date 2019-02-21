import * as infoActions from "../Actions/actionTypes/updateInfoTypes";
import {put,takeLatest} from 'redux-saga/effects';
import Api from '../../Api/updateInfoApi';
import * as actions from "../Actions/actions/updateInfo";

function* updateUserInfo(action)
{
        // debugger;
  const data=yield Api.updateInfo(action.infoData);
  if(data.status)
  {
      yield put(actions.updateInfoSuccess(data)); 
  }
        else
        {
           // debugger;
            yield put(actions.updateInfoFailure(data));
        }
  
}
function* updateUserProfessionalCard(action){
   // debugger;
    const data=yield Api.updateProfessionalCard(action.professionalData);
    if(data.status)
    {
        yield put(actions.updateProfessionalCardSuccess(data)); 
    }
          else
          {
             // debugger;
              yield put(actions.updateProfessionalCardFailure(data));
          }
    
  
}
export function* watchUpdateInfo(){
   // debugger;

    yield takeLatest(infoActions.UPDATEINFO_REQUEST,updateUserInfo);
}
export function* watchUpdateProfessional(){
    yield takeLatest(infoActions.UPDATEPROFESSIONALCARD_REQUEST,updateUserProfessionalCard);
}