import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import {Store} from '../../Store/Store';

export default function Login() {
    console.log(Store.getState(), "first condition");
    const onpress = () => {        
        Store.dispatch({
            type: 'LOGIN_SUCCESS',
        });
        
        console.log(Store.getState(), "after dispatching");
    };

    return (
        <TouchableOpacity onPress= {onpress}>
            <Text>Login cuy</Text>
        </TouchableOpacity>
    )
};
