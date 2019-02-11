import * as passwordActions from "../Actions/actionTypes/updatePasswordTypes";
import {put,takeLatest} from 'redux-saga/effects';
import Api from '../../Api/updatePasswordApi';
import * as actions from "../Actions/actions/updatePassword";

function* updateUserPassword(action)
{
         debugger;
  const data=yield Api.updatePassword(action.passwordData);
  if(data.status)
  {
      yield put(actions.UpdatePasswordSuccess(data)); //change
  }
        else
        {
            debugger;
            yield put(actions.UpdatePasswordFailure(data));
        }
  
}
export function* watchUpdatePassword(){
    debugger;

    yield takeLatest(passwordActions.UPDATEPASSWORD_REQUEST,updateUserPassword);
}