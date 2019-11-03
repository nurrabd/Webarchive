import {combineReducers} from "redux";
import userReducer from "./userReducer";
import siteReducer from "./siteReducer";

export default combineReducers({
    user: userReducer,
    site: siteReducer
});
