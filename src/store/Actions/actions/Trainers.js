import {GET_ALL_TRAINERS_FAIL,GET_ALL_TRAINERS,GET_ALL_TRAINERS_SUCCESS,
    REGISTER,REGISTER_TRAINER_FAIL,REGISTER_TRAINER_SUCCESS} from '../actionTypes/TrainersTypes';
    export const registerTrainerAction=(newTrainer)=>{
   // debugger;
   
    return{
        type:REGISTER,
        newTrainer
    }
}
export const getAllTrainers=()=>{
   // debugger;
    return{
        type:GET_ALL_TRAINERS
    }
}
export const getAllTrainersSuccess=(errState)=>{
   // debugger;
   
   return{
       type:GET_ALL_TRAINERS_SUCCESS,
       errState
   }
}

export const getAllTrainersFailed=(errState)=>{
   // debugger;
   return{
       type:GET_ALL_TRAINERS_FAIL,
       errState
   }
}

export const registerTrainerSuccess=(errState)=>{
   // debugger;
   
    return {
        type:REGISTER_TRAINER_SUCCESS,
        errState
    }
}
export const registerTrainerFail=(errState)=>{
   // debugger;
   return {
       type:REGISTER_TRAINER_FAIL,
       errState
   }
}