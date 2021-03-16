import firebase from 'firebase'

// src/firebase.js
const app = firebase.initializeApp({
  apiKey: "AIzaSyBcemWdaTuIp1J3eTdA2t0RgScJy80xNa4",
  authDomain: "tradingmiddleman-265cb.firebaseapp.com",
  projectId: "tradingmiddleman-265cb",
  storageBucket: "tradingmiddleman-265cb.appspot.com",
  messagingSenderId: "840651650940",
  appId: "1:840651650940:web:076afe08448b33dbf516f9",
  measurementId: "G-BGWGYKB7XL"
});

const auth = app.auth();

const db = app.firestore();

export {app};
export {auth};
export {db};