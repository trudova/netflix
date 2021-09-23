import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "netflix-copycat.firebaseapp.com",
  projectId: "netflix-copycat",
  storageBucket: "netflix-copycat.appspot.com",
  messagingSenderId: "208153768934",
  appId: "1:208153768934:web:495dceba847e524e8c9c27"
};

firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage();
export default storage;