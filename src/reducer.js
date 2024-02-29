import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT,
} from "./Constant";

const initialState = {
    counter: 0,
}

const CounterReducer = (state = initialState, action) =>{
    switch(action.type){
        case HANDLE_INCREMENT:{
           return{
                ...state,
                counter: state.counter + 1
           }
        }
        case HANDLE_DECREMENT:{
            return{
                 ...state,
                 counter: state.counter - 1
            }
         }
        default:
            return state
    }
}

export default CounterReducer;