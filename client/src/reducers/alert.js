//Reducer/function which takes state and action and return
//action will be dispatched from action file
import {SET_ALERT , REMOVE_ALERT} from '../actions/types';
const initialState = [
       
];

export default function(state = initialState , action){
    const {type , payload} = action;

    switch(type){
        case SET_ALERT:
            return [...state , payload];
        
        case REMOVE_ALERT:
            return state
            // .filter(alert => alert.id !== payload);
        
        default:
            return state;
    }
}