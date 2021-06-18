import React from 'react'
import {store} from '../config-store'

export const GetNonce = () => {
  const state =store.getState();
    return state.common.getIn(['configs','nonce']);
}