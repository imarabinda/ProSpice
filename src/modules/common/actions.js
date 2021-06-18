import * as Actions from './constants';

export function doneGettingStarted(){
  return {
    type: Actions.DONE_GETTING_STARTED,
    payload: false,
  };
}

export function setConfigsAction(payload){
  return{
    type: Actions.SET_CONFIGS,
    payload:payload
  }
}

export function setNonceAction(payload){
  return{
    type: Actions.SET_NONCE,
    payload:payload
  }
}


export function subscribePushNotification(payload){
return {
  type: Actions.SUBSCRIBE_PUSH_NOTIFICATION,
  payload:payload
}
}

export function savePushData(payload){
  return {
    type: Actions.SAVE_PUSH_DATA,
    payload:payload
  }
}

