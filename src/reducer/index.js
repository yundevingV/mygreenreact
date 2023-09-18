import { combineReducers } from "redux"
import CookieReducer from "./save_cookie"
import pageReducer from "./save_page";
const rootReducer = combineReducers({
    CookieReducer,
    pageReducer

})

export default rootReducer;