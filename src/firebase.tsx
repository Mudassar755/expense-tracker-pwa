import firebase from 'firebase';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyDbXg5IPQubMouO1ffZUAqgyguhB23qL20",
    authDomain: "fir-messaging-app-a9d22.firebaseapp.com",
    databaseURL: "https://fir-messaging-app-a9d22.firebaseio.com",
    projectId: "fir-messaging-app-a9d22",
    storageBucket: "fir-messaging-app-a9d22.appspot.com",
    messagingSenderId: "909856464134",
    appId: "1:909856464134:web:d91703d11205d8589a9287"
}

firebase.initializeApp(config)

export default firebase;