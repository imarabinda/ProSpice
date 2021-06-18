import {put, call, takeEvery, select} from 'redux-saga/effects';

import * as Actions from './constants';

function* loginUser(payload){
    console.log('login ',payload);
}

export default function* authSaga () {
       yield takeEvery(Actions.LOGIN_USER,loginUser)
}
