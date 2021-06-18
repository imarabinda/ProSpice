import {createSelector} from 'reselect';

export const rootAuth = state => state.auth;

export const isLoginSelector = createSelector (rootAuth, data =>
  data.get ('isLoggedIn')
);

export const authToken = createSelector(rootAuth,data=>data.get('token'))

