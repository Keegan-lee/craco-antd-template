import * as actionTypes from '../actions/actionTypes';

const initialState = {
  test: 'Before Test'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        test: action.payload
      };
    default:
      return state;
  }
};