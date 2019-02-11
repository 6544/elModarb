import {REGISTER_SUCCESS,GET_ALL_CENTERS_SUCCESS,GET_ALL_CENTERS_FAIL,REGISTER_CENTER_FAIL,REGISTER_CENTER,GET_ALL_CENTERS} from '../Actions/actionTypes/centerTypes';
import {put,takeLatest} from 'redux-saga/effects';
import {Api} from '../../Api/centerApi';
function* getAllCenters(){
    // debugger;

    try{
const recievedCenters=yield Api.getAllCentersFromApi();
yield put({type:GET_ALL_CENTERS_SUCCESS,recievedCenters:recievedCenters});
    }
    catch(error){
        yield put({type:GET_ALL_CENTERS_FAIL,error});

    }
}
export function* watchFetchCenters(){
    debugger;

    yield takeLatest(GET_ALL_CENTERS,getAllCenters);
}

function* registerCenter(action)
{
 
    try{
        debugger;
  const result=yield Api.RegisterCenter(action.newCenter);
  debugger;
  if(result.status===true)
  {
      yield put({type:REGISTER_SUCCESS,result:result}); //change
  }
        else
        {
            debugger;
            yield put({type:REGISTER_CENTER_FAIL,error:result.data.errors});
        }
    }
    catch(error)
    {
        // debugger;
//////fail register
yield put({type:REGISTER_CENTER_FAIL,error});

    }
}
export function* watchAddNewCenter(){
    debugger;

    yield takeLatest(REGISTER_CENTER,registerCenter);
}