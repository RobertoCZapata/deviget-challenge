import { combineReducers } from "redux";
import itemListReducer from "./itemListReducer";

export default combineReducers({
	items: itemListReducer
});
