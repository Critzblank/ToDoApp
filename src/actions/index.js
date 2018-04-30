import {ADD_TASK} from './types';
import {REMOVE_TASK} from './types';

export const addTask = (task) => {

    console.log("TASK", task);
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask = (id) => {

    return {
        type: REMOVE_TASK,
        payload: id
    }

}