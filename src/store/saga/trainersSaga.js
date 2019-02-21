import {GET_ALL_TRAINERS,GET_ALL_TRAINERS_SUCCESS,
    GET_ALL_TRAINERS_FAIL, REGISTER, REGISTER_TRAINER_SUCCESS, REGISTER_TRAINER_FAIL} from '../Actions/actionTypes/TrainersTypes';
import {put,takeLatest} from 'redux-saga/effects';
import {Api} from '../../Api/trainerApi';
function* getAllTrainers(){
    //// debugger;

    try{
const recievedTrainers=yield Api.getAllTrainersFromApi();
yield put({type:GET_ALL_TRAINERS_SUCCESS,recievedTrainers:recievedTrainers});
    }
    catch(error){
        yield put({type:GET_ALL_TRAINERS_FAIL,error});

    }
}
export function* watchFetchTrainers(){
   // debugger;

    yield takeLatest(GET_ALL_TRAINERS,getAllTrainers);
}

function* registerTrainer(action)
{
    try{
  const result=yield Api.RegisterTrainer(action.newTrainer);
  if(result.status===true)
  {
      yield put({type:REGISTER_TRAINER_SUCCESS,result:result}); //change
  }
        else
        {
           // debugger;
            yield put({type:REGISTER_TRAINER_FAIL,error:result.data.errors});
        }
    }
    catch(error)
    {
        //// debugger;
//////fail register
yield put({type:REGISTER_TRAINER_FAIL,error});

    }
}
export function* watchAddNewTrainer(){
   // debugger;

    yield takeLatest(REGISTER,registerTrainer);
}