import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxWHGjWIJ_CMyfIdTdkDm5G92d0hUKvPg",
    authDomain: "appsaludmental-53e8d.firebaseapp.com",
    projectId: "appsaludmental-53e8d",
    storageBucket: "appsaludmental-53e8d.appspot.com",
    messagingSenderId: "340826845972",
    appId: "1:340826845972:web:ce6787dd209004cf330801"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};

