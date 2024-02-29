import {
    HANDLE_INCREMENT,
    HANDLE_DECREMENT,
} from "./Constant";

export const Increment = (payload) =>{
    return{
        type: HANDLE_INCREMENT,
        payload: payload
    }
}

export const Decrement = (payload) =>{
    return{
        type: HANDLE_DECREMENT,
        payload: payload
    }
}
