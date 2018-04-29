import {ADD_TASK} from "../actions/types";
import _ from "lodash";

export default function (state = [], action){
    switch(action.type){
        case ADD_TASK:

            const task = _.merge({taskText: action.payload}, {id: state.length});
            console.log("TASK2", task);
            const newState = [...state, task];
            return newState;

        default:
            return state;
    }
}