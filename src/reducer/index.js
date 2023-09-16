import { combineReducers } from "redux"
import CookieReducer from "./save_cookie"

const rootReducer = combineReducers({
    CookieReducer,
})

export default rootReducer;