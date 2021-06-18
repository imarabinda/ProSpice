import { Navigation } from "react-native-navigation";
import {reduxProvider} from './src/config-store'
import Loading from './src/Loading'
import messaging from '@react-native-firebase/messaging';


messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});



Navigation.registerComponent('loading.app', () => reduxProvider(Loading),()=>Loading);
Navigation.events().registerAppLaunchedListener( async () => {
  Navigation.setRoot({
         root: {
           stack: {
             id:'LoadingStack',
             children: [
               {
                 component: {
                   id:'MainLoading',
                   name: 'loading.app',
                   options:{
                     topBar:{
                       visible:false,
                     }
                   }
                 }
               }  
             ]
           }
         }
      });
});

