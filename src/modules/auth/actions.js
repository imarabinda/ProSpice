import * as Actions from './constants';

export function loginUser({payload}){
 
    return {
        type: Actions.LOGIN_USER,
        payload:payload
    }
}