import messaging from '@react-native-firebase/messaging';

// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";

// export function registerMessaging(callback){
// Must be outside of any component LifeCycle (such as `componentDidMount`).
// PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  // onRegister: function (token) {
  //   callback(token.token);
  // },

  // (required) Called when a remote is received or opened, or local notification is opened
  // onNotification: function (notification) {
  //   PushNotification.localNotification(notification);
  //   console.log("NOTIFICATION: FORE", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  // },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  // onAction: function (notification) {
    // console.log("ACTION:", notification.action);
    // console.log("NOTIFICATION ACTion:", notification);

    // process the action
  // },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  // onRegistrationError: function(err) {
    // console.error(err.message, err);
  // },

  // IOS ONLY (optional): default: all - Permissions to register.
  // permissions: {
  //   alert: true,
  //   badge: true,
  //   sound: true,
  // },

  // Should the initial notification be popped automatically
  // default: true
  // popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  // requestPermissions: true,
// });
// }


export function registerMessaging(callback){



  messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    
     messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );  
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
      
  messaging().hasPermission().then(enabled=>{
    if(enabled){
        getToken(callback);
    }else{
      requestUserPermission(callback);
    }
  })
}

async function requestUserPermission(callback) {

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if(enabled){
      getToken(callback);
    }
  }

export async function getToken(callback){
  messaging().getToken().then(token=>{
              if(token){
                  callback(token)
              }else{
                  console.log("User dosen't have device token")
              }
          }).catch(error=>{
              console.log("get token rejected: ",error);
          })
      
}


export function onRefreshToken(callback){
      messaging().onTokenRefresh(token => {
      callback(token);
    });
}

