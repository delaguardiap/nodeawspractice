import types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.selectPicture: {
      state = Object.assign({}, state, { url: action.payload });
      break;
    }
  }
  return state;
};
