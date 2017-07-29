import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHxVMvha5P4QfP2KJan8PxOmSM24IgxFg',
      authDomain: 'authentication-4eaec.firebaseapp.com',
      databaseURL: 'https://authentication-4eaec.firebaseio.com',
      projectId: 'authentication-4eaec',
      storageBucket: 'authentication-4eaec.appspot.com',
      messagingSenderId: '949768173815'
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentification" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
