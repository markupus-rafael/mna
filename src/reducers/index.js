import { combineReducers } from "redux";
import {
  logins,
} from "./login/loginReducers";

const rootReducer = combineReducers({
  logins
});

export default rootReducer;
