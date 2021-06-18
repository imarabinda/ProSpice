import {fromJS, List, Set, Map} from 'immutable';
import * as Actions from './constants';


const initState = fromJS ({
  isLoggedIn: false,
  userData:fromJS({
      name: 'Android Oreo',
      phone:987654321
  }),
  token:'',
});
/**
 * Auth reducer
 * @param state
 * @param action
 * @returns {*}
 */
function authReducer (state = initState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case Actions.LOGIN_SUCCESS:
      return state.set ('isLoggedIn', true).set('userData',payload);
    default:
      return state;
  }
}

export default authReducer;
