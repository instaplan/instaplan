import React, {Component}from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import GoogleSuggest from '../Components/CreateEvent';
import {API_KEY} from '../config/config';



firebase.initializeApp({
    apiKey: API_KEY,
    authDomain:"event-finder-68c32.firebaseapp.com"
})



class Authorization extends Component {
    state ={
        isSignedIn: false
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }


      componentDidMount =() =>{
         
          firebase.auth().onAuthStateChanged(user => {
              this.setState({isSignedIn: !!user})
          })
      }

    render() {
  return (
    <div className="App">
           {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
            <div>
              <GoogleSuggest />
            </div>

          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
    </div>
  );
}
}

export default Authorization;