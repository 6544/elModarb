import {SEARCH,SEARCH_FAIL,SEARCH_SUCCESS} from '../Actions/actionTypes/searchTypes';
import {put,takeLatest} from 'redux-saga/effects';
import {Api} from '../../Api/searchApi';

function* searchByNameSaga(action)
{
    debugger;
    try{
          
  const result=yield Api.searchByNameFromApi(action.newObject);
//     
  if(result.status===true)
  {
      yield put({type:SEARCH_SUCCESS,result:result.data.data}); //change
  }
        else
        {
              
            // ,error:result.data.errors
            yield put({type:SEARCH_FAIL,error});
        }
    }
    catch(error)
    {
        //   
//////fail register
yield put({type:SEARCH_FAIL,error});

    }
}
export function* watchSearch(){
      

    yield takeLatest(SEARCH,searchByNameSaga);
}



// function* searchByPlaceSaga(action)
// {
//     try{
//         //   
//   const result=yield Api.searchByPlaceFromApi(action.newObject);
    
//   if(result.status===true)
//   {
//       yield put({type:SEARCH_SUCCESS,result:result.data.data}); //change
//   }
//         else
//         {
              
//             // ,error:result.data.errors
//             yield put({type:SEARCH_FAIL,error});
//         }
//     }
//     catch(error)
//     {
//         //   
// //////fail register
// yield put({type:SEARCH_FAIL,error});

//     }
// }
// export function* watchSearchPlace(){
      

//     yield takeLatest(SEARCH,searchByPlaceSaga);
// }