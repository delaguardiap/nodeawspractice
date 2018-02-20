import types from "./types.js";

module.exports.selectPicture = function selectPicture(picture) {
  return {
    type: types.selectPicture,
    payload: picture
  };
};
