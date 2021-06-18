import React from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import sagas from './redux/sagas';
import immutableTransform from 'redux-persist-transform-immutable';

const persistConfig = {
    key: 'rootKeyPersist',
    transforms: [immutableTransform()],
    whitelist: ['common', 'auth', 'category'],
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware, thunk));

let persistor = persistStore(store);

sagaMiddleware.run(sagas);


export const reduxProvider = (Component) => (props: any) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...props} />
        </PersistGate>
    </Provider>
);
