import { combineReducers } from "redux";
import pictureReducer from "./pictureReducer";

export default combineReducers({
  picture: pictureReducer
});
