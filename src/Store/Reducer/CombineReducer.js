import {combineReducers} from 'redux';
import {GlobalReducer} from '../../Shared/GlobalReducer';
import Homereducer from '../../Features/Home/reducer';
import {Loginreducer} from '../../Features/Login/reducer';

export const CombineReducer = combineReducers({
    GlobalReducer, Loginreducer,
});