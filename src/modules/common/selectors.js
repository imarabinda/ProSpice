import {createSelector} from 'reselect';

export const rootCommon = state => state.common;

export const pushSelector = createSelector(
  rootCommon,
  data=>data.get('push'),
  );
  
export const configsSelector = createSelector(
  rootCommon,
  data => data.get('configs'),
);

export const gettingStartedSelector = createSelector(
  rootCommon,
  data => data.get('isGettingStarted'),
);

export const lastUpdatedSelector = createSelector(
  rootCommon,
  data=>data.getIn(['configs','last_load']),
)
export const nonceSelector = createSelector(
  rootCommon,
  data=>data.getIn(['configs','nonce']),
)
