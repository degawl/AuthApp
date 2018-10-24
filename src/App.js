import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyAHyEo0K8y5qtMPzqjdoFN6-4EE_BY0y3I',
                authDomain: 'authapp-cd849.firebaseapp.com',
                databaseURL: 'https://authapp-cd849.firebaseio.com',
                projectId: 'authapp-cd849',
                storageBucket: 'authapp-cd849.appspot.com',
                messagingSenderId: '244392643032'
        });
    }
    
    render() {
        return (
            <View>
                <Header headerText={'AuthApp'} />
                <Text>Auth</Text>
            </View>
        );
    }
}

export default App;
