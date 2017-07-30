import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBHxVMvha5P4QfP2KJan8PxOmSM24IgxFg',
      authDomain: 'authentication-4eaec.firebaseapp.com',
      databaseURL: 'https://authentication-4eaec.firebaseio.com',
      projectId: 'authentication-4eaec',
      storageBucket: 'authentication-4eaec.appspot.com',
      messagingSenderId: '949768173815'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
