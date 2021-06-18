import { all } from 'redux-saga/effects';

import authSaga from '../modules/auth/saga';
import commonSaga from '../modules/common/saga';


export default function* rootSagas() {
    yield all([
        commonSaga(),
        authSaga(),
    ]);
}
