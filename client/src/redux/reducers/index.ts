import testReducer from "./testReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    test: testReducer,
    user: userReducer,
});

export default allReducers;