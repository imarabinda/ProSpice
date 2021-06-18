import {fromJS, List, Set, Map} from 'immutable';
import * as Actions from './constants';


const initConfigs = fromJS({
  requireLogin:true,
  
  timezone_string       :'+00:00',
  date_format           :'d-m-y',
  time_format          : 'H:i:s',
        
  maintenanceActive:false,
  maintenanceText:'Text',
  minimumAppVersion:{
    ios:'1.0.0',
    android:'1.0.0',
  },

  updateAbleAppVersion: {
    ios: '1.0.0',
    android: '1.0.0',
    isNewVersionMandatory:false,
    downloadLinkEnabled:false,
    downloadLinkAndroid:'https://mrlazyfox.com'
  },
  changeLog:{
    changeLogEnabled:false,
    changeLogTexts:fromJS(),
  },
  store:{
    storeOpenForm:'06:00:00',
    storeOpenTo:'23:00:00',
    storeClosed:false,
    disableOnlineOrders:false,
    disableOnlineOrdersText:'',
    enableStoreOpenAndCloseHours:false,

			
  },
  copyrightText:'Copyright Text',
  privacyLink:'/privacy-policy',
  termsLink:'/terms-&-conditions',
  aboutUsLink:'/about-us',
  last_updated:false,
  nonce:'',
});

const push =fromJS({
  status:'none',
  token:'',
})

const initState = fromJS({
  isGettingStarted: true,
  configs:initConfigs,
  push:push
})
/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function commonReducer(state = initState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case Actions.DONE_GETTING_STARTED:
      return state.set('isGettingStarted',payload);
    case Actions.SET_CONFIGS:
      return state.set('configs',payload);
    case Actions.SET_NONCE:
      return state.setIn(['configs','nonce'],payload);
    case Actions.SAVE_PUSH_DATA:
      return state.set('push',payload);
    default:
      return state;
  }
}

export default commonReducer;
