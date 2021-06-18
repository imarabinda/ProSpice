import React from 'react'
import { Navigation } from 'react-native-navigation'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export function gettingStartedRoute (callBack,config) {
  Navigation.setRoot ({
    root: {
      stack: {
        id: 'GettingStartedStack',
        children: [
          {
            component: {
              id: 'GettingStartedComponent',
              name: 'GettingStarted',
              passProps: {
                      callBack: callBack,
                      config: config
                  }
            },
          },
        ],
      },
    },
  });
}
export function securityRoute(){
    Navigation.setRoot({
        root: {
            stack: {
                id: 'SecurityStack',
                children: [
                    {
                        component: {
                            id: 'SecurityComponent',
                            name: 'Security',
                        }
                    }
                ],
            }
        }
    })
}

export function authRoute() {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AuthStack',
                children: [
                    {
                        component: {
                            id: 'AuthComponent',
                            name: 'Auth',
                        }
                    }
                ],
            }
        }
    })
}
export function appRoute() {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AppVersionStack',
                children: [
                    {
                        component: {
                            id: 'AppVersionComponent',
                            name: 'AppVersion',
                        }
                    }
                ],
            }
        }
    })
}
export function maintenanceRoute () {
  Navigation.setRoot ({
    root: {
      stack: {
        id: 'MaintenanceStack',
        children: [
          {
            component: {
              id: 'MaintenanceComponent',
              name: 'Maintenance',
            },
          },
        ],
      },
    },
  });
}
export function closeOrderRoute () {
  Navigation.setRoot ({
    root: {
      stack: {
        id: 'CloseOrderStack',
        children: [
          {
            component: {
              id: 'CloseOrderComponent',
              name: 'CloseOrder',
            },
          },
        ],
      },
    },
  });
}


export function homeRoutes(){

    Promise.all([
        Foundation.getImageSource('paw', 30),
        Ionicons.getImageSource('search-circle-outline',30),
        MaterialCommunityIcons.getImageSource('bag-personal-outline',30),
        Feather.getImageSource('settings',30),
    ]).then(([paw,search,cart,settings]) => {
   Navigation.setRoot({
            root: {
                sideMenu: {
                    left: {
                        stack:
                        {
                            id: 'SideMenuStack',
                            children: [
                                {
                                    component: {
                                        id:'SideMenuComponent',
                                        name: 'SideMenu',
                                        options:{
                                            topBar:{
                                                visible:false,
                                            },
                                        },
                                    },
                                }
                            ]
                        }
                    },
                    center: {
                        bottomTabs: {
                            children: [
                                {
                                    stack: {
                                        id:'HomeStack',
                                        children: [
                                            {
                                                component: {
                                                    id: 'HomeComponent',
                                                    name: 'Home',
                                                    options: {
                                                        topBar: {
                                                            visible: false,
                                                            title:{
                                                                text:'Home'
                                                            }
                                                        },

                                                    },
                                                },
                                            },
                                        ],
                                        options: {
                                            bottomTab: {
                                                text: 'Home',
                                                icon: paw,
                                            },
                                        },
                                    },
                                },
                                {
                                    stack: {
                                        id:'SearchStack',
                                        children: [
                                            {
                                                component: {
                                                    id: 'SearchComponent',
                                                    name: 'Search',
                                                    options: {
                                                        topBar: {
                                                            visible: false,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                        options: {
                                            bottomTab: {
                                                text: 'Search',
                                                icon:search
                                            },
                                        },
                                    },
                                },
                                {
                                    stack: {
                                        id:'CartStack',
                                        children: [
                                            {
                                                component: {
                                                    id:'CartComponent',
                                                    name: 'Cart',
                                                    options: {
                                                        topBar: {
                                                            visible: false,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                        options: {
                                            bottomTab: {
                                                text: 'Bag',
                                                icon:cart
                                            },
                                        },
                                    },
                                },
                                {
                                    stack: {
                                        id:'SettingsStack',
                                        children: [
                                            {
                                                component: {
                                                    id:'SettingsComponent',
                                                    name: 'Settings',
                                                    options: {
                                                        topBar: {
                                                            visible: false,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                        options: {
                                            bottomTab: {
                                                text: 'Settings',
                                                icon:settings
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            },
        });
    })   
}