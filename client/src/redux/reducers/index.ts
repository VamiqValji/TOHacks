import testReducer from "./testReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    test: testReducer,
});

export default allReducers;