import { combineReducers } from 'redux';
import commonReducer from '../modules/common/reducer';
import authReducer from '../modules/auth/reducer';

const rootReducers = combineReducers({
common:commonReducer,
auth:authReducer,
});

export default rootReducers;
