import types from "../actions/types";
import axios from "axios";

export default (state = { fetching: false, gallery: [] }, action) => {
  switch (action.type) {
    case types.fetchGalleryStart: {
      state = Object.assign({}, state, { fetching: true });
      break;
    }
    case types.fetchGalleryEnd: {
      state = Object.assign({}, state, {
        fetching: false,
        gallery: action.payload
      });
      break;
    }
    case types.fetchGalleryError: {
      state = Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    }
  }
  return state;
};
