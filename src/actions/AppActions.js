import * as actionTypes from './actionTypes';

class AppActions {
  static testAction() {
    return { type: actionTypes.TEST_ACTION, payload: 'After Test' };
  }
}

export default AppActions;