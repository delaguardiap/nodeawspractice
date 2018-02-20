import types from "./types.js";
import axios from "axios";

module.exports.selectPicture = function selectPicture(picture) {
  return {
    type: types.selectPicture,
    payload: picture
  };
};

module.exports.fetchGalleryError = fetchGalleryError;

function fetchGalleryError(error) {
  return {
    type: types.fetchGalleryError,
    payload: {message: "Oops, an error has occurred. Please try again later", error: error}
  }
}

module.exports.fetchGallery = function fetchGallery(dispatch) {
  dispatch(fetchGalleryStart());
  axios.get("https://www.google.com").then(res => {
    dispatch(fetchGalleryEnd(res.data));
    dispatch
  }).catch(e => {
    dispatch(fetchGalleryError(e));
  });
};

function fetchGalleryStart() {
  return {
    type: types.fetchGalleryStart
  };
}

function fetchGalleryEnd(gallery) {
  return {
    type: types.fetchGalleryEnd,
    payload: gallery
  };
}
