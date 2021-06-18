import {put, call, takeEvery, select} from 'redux-saga/effects';
import { isLoginSelector } from '../auth/selector';
import {Platform} from 'react-native';
import * as Actions from './constants';
import { pushSelector } from './selectors';
import {savePushData} from './actions';
import { sendToken } from './service';

function* pushSubscribeSaga({payload}){
 const isLoggedIn = yield select(isLoginSelector);
 const push = yield select(pushSelector);
 const {status,token}=push;
    if(token && payload==token){
        if((status =='guest' || status == 'none' ) && isLoggedIn){
            try{
                const server = yield call(sendToken,{token:payload,platform:Platform.OS,status:status});
                yield put(savePushData(server));
            }catch(e){
                console.log('push_error', e);
            }
        }else if(status =='auth' && !isLoggedIn){
            try{
                const server = yield call(sendToken,{token:payload,platform:Platform.OS,status:'guest'});
                yield put(savePushData(server));
            }catch(e){
                console.log('push_error', e);
            }
        }
    }else{
        try{
            const server = yield call(sendToken,{token:payload,platform:Platform.OS,status:'none'});
            yield put(savePushData(server));
        }catch(e){
            console.log('push_error', e);
        }
    }
}

export default function* commonSaga() {
yield takeEvery(Actions.SUBSCRIBE_PUSH_NOTIFICATION,pushSubscribeSaga)
}