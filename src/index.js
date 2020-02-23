import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const  firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDTms_6qLf3Gi1SGW9sb1oCiAIQIK54kJE",
    authDomain: "open-circle-269020.firebaseapp.com",
    databaseURL: "https://open-circle-269020.firebaseio.com",
    projectId: "open-circle-269020",
    storageBucket: "open-circle-269020.appspot.com",
    messagingSenderId: "554714986262",
    appId: "1:554714986262:web:d4cd7816f38a7ebb26c237",
    measurementId: "G-H4GLSZ3FDY"
})

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
