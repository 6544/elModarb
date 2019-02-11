import {
    GET_ALL_TRAINERS, GET_ALL_TRAINERS_SUCCESS, GET_ALL_TRAINERS_FAIL,
    REGISTER, REGISTER_TRAINER_SUCCESS, REGISTER_TRAINER_FAIL
} from '../Actions/actionTypes/TrainersTypes';
//inital : trainers ,error
initialState = {
    trainers: null,
    error: null,
    trainer: null,
    errorsList: null,
    loading: false,
    loadingTrainer:false,
    newTrainer: null,
    name: null,
    sex: null,
    email: null,
    prefix: null,
    phone: null,
    role_id: null,
    country_id: null,
    state_id: null,
    city_id: null,
    nationality_id: null,
    trainer_field: {},
    professional_card: {},
    image: null,
    payments: null
}
//old state to maintain and actions
const trainersReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRAINERS:


            return {
                ...state,
                loading: true,
            }
            break;
        case GET_ALL_TRAINERS_SUCCESS:


            return {
                ...state,
                loading: false,
                error: false,
                trainers: action.recievedTrainers//eftekry
            }
            break;

        case GET_ALL_TRAINERS_FAIL:


            return {
                ...state,
                loading: false,
                error: true,
                trainers: null
            };

            break;
        case REGISTER:


            return {
                ...state,
                newTrainer: action.newTrainer,
                loadingTrainer: true,
                error: false,
                trainer:null,
                errorsList:null
            };
        case REGISTER_TRAINER_FAIL:


            return {
                ...state,
                errorsList: action.error,
                loadingTrainer: false,
                error: true,
                trainer: null
            };
        case REGISTER_TRAINER_SUCCESS:


            return {
                ...state,
                trainer: action.result,
                loadingTrainer: false,
                error: false
            };
        default:
            return state;
    }
}
export default trainersReducers;