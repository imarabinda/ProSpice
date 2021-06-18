import {Navigation} from 'react-native-navigation';
import {mainScreens,miscellaneousScreens} from '../configs/navigator';
import {reduxProvider} from '../config-store';



Navigation.setLazyComponentRegistrator((componentName) => {
  Navigation.registerComponent(componentName, () => reduxProvider(miscellaneousScreens[componentName]),()=>miscellaneousScreens[componentName])
});


export function registerMainScreens () {
  Object.keys (mainScreens).map (Component => {
    Navigation.registerComponent (
      Component,
      () => reduxProvider (mainScreens[Component]),
      () => mainScreens[Component]
    );
  });
}

// export function registerMiscellaneousScreens () {
//   Object.keys (miscellaneousScreens).map (Component => {
//     Navigation.registerComponent (
//       Component,
//       () => reduxProvider (miscellaneousScreens[Component]),
//       () => miscellaneousScreens[Component]
//     );
//   });
// }





/*****
 * setDefault() need to be applied before setting setRoot()
 * if we need to update theme we can use processor or setDefaults() again
 * with changed values and re set setRoot()
 * 
 * 
 * These are the options set which can be used in Navigation.mergeOptions(componentID,{OPTIONS});
 * according to type
 * 
 * 
 ****/

export function setDefault() {
  Navigation.setDefaultOptions({
    /**
     * Status bar options
     */
    statusBar: {
      style:'light', //both
      drawBehind:false, //android
      visible: true, //both
      translucent:false, //android
      // backgroundColor: statusBarBgColor, //android
    },

    /***
     * Top bar of stack
     * Options
     */
    topBar: {
      animate: true, //both
      visible: false, //both
      // drawBehind:'' //both
      // hideOnScroll:true, //both
      
      // elevation:10, //Android
      // borderHeight:'', //Android
      
      noBorder:true, //iOS
      barStyle:'black', //iOS
      // borderColor:'grey', //iOS
      searchBar:true, //iOS
      // searchBarHiddenWhenScrolling:false, //iOS
      // searchBarPlaceholder:'Search here...', //iOS
      // hideNavBarOnFocusSearchBar:true, //iOS
      
      
      title: {
        // text: 'Home', //both
        fontSize: 20, //both
        fontWeight: 20, //both
        // fontFamily:'', //both
        color: 'grey', //both
        // component:'', //both
        visible:false, //both
        
        // topMargin:10, //android
        
        // alignment:'center', //fill is for android & center is for iOS,
      },
      
      // subtitle: {
      //   text: 'Home Sub', //both
      //   fontSize: 20, //both
      //   fontWeight: 200, //both
      //   // fontFamily:'', //both
      //   color: 'grey', //both
      //   alignment: 'center', //both
      //   visible:false,
      // },
      
      background: {
        // color:'grey', //both
        // component:'', //both
        
        // clipToBounds:true, //iOS
        // translucent:true, //iOS
        // blur:true, //iOS
      },
      
      backButton: {
        color:'grey', //both
        // icon:'', //both
        // visible:false, //both
        
        showTitle:true, //iOS
        // title:'Title', //iOS
      },
      
      leftButtonColor: 'grey', //both
  
      leftButtons:{
        allCaps:false, //both
        fontSize:20, //both
        // icon:'', //both
        // text:'jj', //both
        // component:'', //both
        // showAsAction:'', //android
        // iconInsets:{ //iOS
        //   left:'',
        //   right:'',
        //   top:'',
        //   bottom:'',
        // },
        // systemItem:1,//iOS , icon
      },
      
      rightButtonColor:'grey', //both
      rightButtons:{
        allCaps: false, //both
        fontSize: 20, //both
        // icon:'', //both
        // text:'jj', //both
        // component: '', //both
        // showAsAction:'', //android
        // iconInsets:{ //iOS
        //   left:'',
        //   right:'',
        //   top:'',
        //   bottom:'',
        // },
        // systemItem:1,//iOS , icon
      },
    },
    
    /***
     * Bottom Tabs options
     */
    bottomTabs:{
      animate: true, //both
      // backgroundColor:'black', //both
      // barStyle:'black', //both
      visible:true, //both
      titleDisplayMode:'showWhenActive', //both
      tabsAttachMode:'onSwitchToTab', //both
      // currentTabIndex:1, //both
      // currentTabId:1, //both
      // drawBehind:false, //both
      
      preferLargeIcons:true, //android
      // elevation:10, //android
      // hideOnScroll:true, //android
      
      // hideShadow:true, //iOS
      // translucent:true, //iOS
    },
    /***
     * Bottom Tab options
     */
    bottomTab: {
      fontSize: 20, //both
      // fontFamily:'', //both

      // text:'', //both
      textColor: 'grey', //both
      iconColor: 'grey', //both
      
      selectedTextColor: 'orange', //both
      selectedIconColor: 'orange', //both
      selectedFontSize: 20, //both
      
      // selectedIcon:3, //both
      // iconInsets:{ //both
      //   left:3,
      //   right:100,
      //   top:70,
      //   bottom:90,
      // },
      
      // disableIconTint:true, //android
      // disableSelectedIconTint:true, //android
      
      // badge:1, //both
      // badgeColor:'red', //both
      // animateBadge:true, //android
      // dotIndicator:{ //both
      //   visible:true,
      //   color:'red',
      //   size:20,
      //   animate:true
      // },

    },

    /*****
     * Navigation bar options
     */
    navigationBar:{ //android
      visible:true,
      // backgroundColor:'red'
    },

    /***
     * Layout options
     */
    layout:{
      // fitSystemWindows:true, //both
      // backgroundColor:'grey' //both
      // componentBackgroundColor:'grey', //both
      // orientation:'portrait' //both
      // topMargin:20, //android
      // direction:'locale', //both
    },
    
    /***
     * Overlay options
     */
    overlay: {
      // interceptTouchOutside:false, //both
      // handleKeyboardEvents:true, //iOS
    },

    /***
     * SideMenu options
     */
    sideMenu: {
      openGestureMode: 'bezel', //both
      left: { //both
        enabled:true,
        visible:true, 
        // width:20, 
        // height:20,
      },
       right: { //both
        enabled: false,
        visible: false,
        // width: 20,
        // height: 20,
      },
    },
  });
}