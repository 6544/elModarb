import * as socialTypes from "../Actions/actionTypes/socialIntegrationTypes";
import {put,takeLatest} from 'redux-saga/effects';
import Api from '../../Api/socialIntegrationApi';
import * as socialactions from "../Actions/actions/socialIntegration";

function* AddSocial(action)
{
         debugger;
  const data=yield Api.Add_UpdateSocialIntegration(action.socialData);
  if(data.status)
  {
      yield put(socialactions.socialIntegrationSuccess(data)); //change
  }
        else
        {
            debugger;
            yield put(socialactions.socialIntegrationFailure(data));
        }
  
}
export function* watchAddSocial(){
    debugger;

    yield takeLatest(socialTypes.ADD_SOCIAL_INTERATION_REQUEST,AddSocial);
}