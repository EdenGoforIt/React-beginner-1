import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import sample from "./sample";
import loading from "./loading";

const rootReducer = combineReducers({
  sample,
  loading,
});
export default rootReducer;
