import React from 'react';
import { Text, Button, View, Platform,Dimensions} from 'react-native';
import codePush from 'react-native-code-push';
import {registerMainScreens} from './navigation/register';
import { gettingStartedRoute, homeRoutes, authRoute,appRoute,maintenanceRoute,closeOrderRoute, securityRoute } from './navigation/routes';
import { setDefault } from './navigation/register';
import { connect} from 'react-redux'
import { compose} from 'redux'
import { setConfigsAction,setNonceAction, subscribePushNotification} from './modules/common/actions'
import { configsSelector, gettingStartedSelector } from './modules/common/selectors';
import {isLoginSelector} from './modules/auth/selector';
import SplashScreen from 'react-native-splash-screen';
import { loadConfigsService } from './modules/common/service';
import { fromJS } from 'immutable';
import DeviceInfo from 'react-native-device-info';
import Modal from 'react-native-modal'
import { registerMessaging } from './utilities/push';
import messaging from '@react-native-firebase/messaging';

class Loading extends React.Component {
  
  state = {
      showModal:false
    }

  componentDidMount() {
    if(Platform.OS =='ios'){
    messaging().getIsHeadless().then(isHeadless => {
      // do sth with isHeadless
      console.log('normal headlesss',isHeadless);
    });
    }    

    registerMainScreens();
    //add login to set between getting started and main view
    setDefault();
    this.fetchAppConfigs(); 
  }

  /*********
   *
   * Fetch Base App version && new Required Binary Version
   *
   *********/
  fetchAppConfigs = async () => {
    const {configs}=this.props;
    try{
      const server = await loadConfigsService(configs.get('last_updated'));
      const data = fromJS(server);
      registerMessaging(this.onRegisterPush);
      if(data.get('last_updated')!= configs.get('last_updated')){
          this.conditionalRoute(data);
          this.props.dispatch(setConfigsAction(data));
        }else{
          this.conditionalRoute(configs);
      }
      this.props.dispatch(setNonceAction(data.get('nonce')));
    }catch(e){
      console.log('config_error ',e);
      if(e.data.status){
        this.setState({
          showModal:true
        })
      }
    }
  };


  onRegisterPush=(fcmToken)=>{
    this.props.dispatch(subscribePushNotification(fcmToken));
  }


  conditionalRoute=(config)=>{
    SplashScreen.hide();

    const { gettingStarted } = this.props;
    
    if(!__DEV__){
      DeviceInfo.isEmulator().then(isEmulator => {
        if(isEmulator){
          securityRoute();
          return;
        }
      });
    }


    if (DeviceInfo.getVersion() < config.getIn(['minimumAppVersion', Platform.OS])) {
      appRoute();
      return;
    }

    if (DeviceInfo.getVersion() < config.getIn(['updateAbleAppVersion', Platform.OS]) && config.getIn(['updateAbleAppVersion','isNewVersionMandatory'])){
      appRoute();
      return;
    }

    if (gettingStarted) {
      gettingStartedRoute(this.callBackRoute,config);
      return;
    }

    this.callBackRoute(config);

  }

  callBackRoute=(config)=>{

    const { isLoggedIn} = this.props;
    if (config.get('maintenanceActive')) {
      maintenanceRoute();
      return;
    }

    if (config.getIn(['store', 'enableStoreOpenAndCloseHours']) && config.getIn(['store', 'storeClosed']) || config.getIn(['store', 'disableOnlineOrders'])) {
      closeOrderRoute();
      return;
    }

    if (config.get('requireLogin') && !isLoggedIn) {
      authRoute();
      return;
    }

    if (isLoggedIn) {
      homeRoutes();
      return;
    }
    homeRoutes();
  }



     // Clear the view
  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight =  Dimensions.get("window").height;
 
    return (
    <Modal
      isVisible={this.state.showModal}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <View style={{ flex: 1 }} style={{backgroundColor:'white',borderRadius:10}}>
        <Text style={{textAlign:'center',paddingTop:'10%',paddingBottom:'10%'}}>Sorry, Failed to connect with server. Try again later or update the app.</Text>

      </View>
    </Modal>
    )
  }
}



  const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESTART,
  };

const mapStateToProps =(state)=>{
  return {
    configs: configsSelector(state),
    gettingStarted:gettingStartedSelector(state),
    isLoggedIn:isLoginSelector(state),
  }
}

const enhance = compose(connect(mapStateToProps),codePush(codePushOptions));
export default enhance(Loading);
