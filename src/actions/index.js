import {ADD_TASK} from './types';

export const addTask = (task) => {
    console.log("TASK", task);
    return {

        type: ADD_TASK,
        payload: task
    }
}