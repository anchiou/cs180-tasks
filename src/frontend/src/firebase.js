import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB_yznuR8jR7cY3eJWeCWUoUUEkoY91c5A",
    authDomain: "tasker-webapp.firebaseapp.com",
    databaseURL: "https://tasker-webapp.firebaseio.com",
    projectId: "tasker-webapp",
    storageBucket: "tasker-webapp.appspot.com",
    messagingSenderId: "727174095687"
};

var fire = firebase.initializeApp(config);

export default fire;