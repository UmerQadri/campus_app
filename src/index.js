import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'


 var config = {
    apiKey: "AIzaSyDENoI3nfDCtX111Fi_LGfmyMwa8fBf944",
    authDomain: "first-firebase-d7b39.firebaseapp.com",
    databaseURL: "https://first-firebase-d7b39.firebaseio.com",
    storageBucket: "first-firebase-d7b39.appspot.com",
   
  };


  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
