import {Navigation} from 'react-native-navigation';

export function pushTo(componentId, params) {
  Navigation.push(componentId, {
    component: {
      name: params.name,
    },
  });
}

export function backFrom(componentId) {
  Navigation.pop(componentId);
}