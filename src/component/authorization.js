import React, {Component}from 'react';
import firebase from 'firebase'
import {connect} from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import GoogleSuggest from '../Components/CreateEvent';
import {updateIsSignedIn} from '../ducks/userReducer';

import {API_KEY} from '../config/config';




firebase.initializeApp({
    apiKey:"AIzaSyAptYBKyKOnx7vUpYLMJNP_LbPrU6yohGs",
    authDomain:"event-finder-68c32.firebaseapp.com"
})



class Authorization extends Component {

    uiConfig = {
        signInFlow: "redirect",
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
              this.props.updateIsSignedIn(!!user)
          })
      }

    render() {
  return (
    <div className="App">
           {this.props.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            {/* <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
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

const mapStateToProps = reduxState => {
  return {
    isSignedIn: reduxState.user.isSignedIn
  }
}

export default connect(mapStateToProps,
  {
    updateIsSignedIn
  }
)(Authorization);
