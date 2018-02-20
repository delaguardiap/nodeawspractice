import { combineReducers } from "redux";
import pictureReducer from "./pictureReducer";
import galleryReducer from "./galleryReducer";

export default combineReducers({
  picture: pictureReducer,
  gallery: galleryReducer
});
