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

export const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

export default fire;
export const auth = firebase.auth();