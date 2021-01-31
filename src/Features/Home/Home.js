import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Login from '../Login/Login';
import {connect} from 'react-redux';
import {ActionLogOut} from './action';

const mapStateToProps = (state) => ({
    isLogged: state.Loginreducer.isLogged,
});

const mapDispatchToProps = {
    ActionLogOut,
};

function Home(props) {
    const logout = () => {
        props.ActionLogOut();
    };

    return (
        <React.Fragment>
            {props.isLogged ? (
            <>            
            <TouchableOpacity>
                <Text>Ini Home loh</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
                <Text>Log Out yuukk</Text>
            </TouchableOpacity>
            </>
            ) : (<Login />)}
        </React.Fragment>        
    );
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);