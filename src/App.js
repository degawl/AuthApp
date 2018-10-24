import React, { Component } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: Config.FIREBASE_API_KEY,
                authDomain: 'authapp-cd849.firebaseapp.com',
                databaseURL: 'https://authapp-cd849.firebaseio.com',
                projectId: Config.PROJECT_ID,
                storageBucket: 'authapp-cd849.appspot.com',
                messagingSenderId: Config.MESSAGING_SENDER_ID
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'AuthApp'} />
                <LoginForm />
            </View>
        );
    }
}

export default App;
