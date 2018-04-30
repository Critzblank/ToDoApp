import {ADD_TASK, REMOVE_TASK} from "../actions/types";
import _ from "lodash";

export default function (state = [], action){
    switch(action.type){
        case ADD_TASK:
            const task = _.merge({taskText: action.payload}, {id: state.length});
            console.log("TASK2", task);
            const newState = [...state, task];
            return newState;
        case REMOVE_TASK:
            const removeTask = _.remove(state, task => {
                return task.id != action.payload
            })
            return removeTask;
        default:
            return state;
    }
}