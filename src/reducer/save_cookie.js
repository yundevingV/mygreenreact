import { saveCookie, SAVE_COOKIE } from "../action/cookie";

const initalState = {
    cookie : null
}

export default function SaveCookieReducer(
    state = initalState,
    action 
){
    switch(action.type){
        case SAVE_COOKIE :
            return {...state,cookie : action.payload}
        default :
            return state;
    }
}


