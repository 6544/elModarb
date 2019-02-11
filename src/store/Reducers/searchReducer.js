import {SEARCH,SEARCH_FAIL,SEARCH_SUCCESS} from '../Actions/actionTypes/searchTypes';
    //inital : trainers ,error
    initialState={
        error:null,
        trainer:null,
        loading:false,
        newObject:null,
       
    }
    //old state to maintain and actions
    const searchReducer=(state=initialState,action)=>{
          
        switch(action.type)
        {
          
            case SEARCH:
             
        debugger;
                return {...state,
                newObject:action.newObject,
                loading:true,
                error:false
            };
            case SEARCH_FAIL:
             
        
                return {...state,
                loading:false,
                error:true,
                trainer:null
            };
            case SEARCH_SUCCESS:
             
        
                return {...state,
                trainer:action.result,
                loading:false,
                error:false
            };
            default:
            return state;
        }
    }
    export default searchReducer;