import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {GlobalReducer} from '../Shared/GlobalReducer';
import {CombineReducer} from './Reducer/CombineReducer';
import logger from 'redux-logger';

const persistConfig = {
    key: 'rnclassbatch10',
    storage: AsyncStorage,
    // blacklist: ['GlobalReducer'],
};

const persistedReducer = persistReducer(persistConfig, CombineReducer);

export const Store = createStore(persistedReducer, applyMiddleware(logger));
export const Persistor = persistStore(Store);