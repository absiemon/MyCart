import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrVELutD44TnesdQPYolknFTFI2oh09vs",
  authDomain: "cart-a8b51.firebaseapp.com",
  projectId: "cart-a8b51",
  storageBucket: "cart-a8b51.appspot.com",
  messagingSenderId: "1032416631438",
  appId: "1:1032416631438:web:8ab4543dfa3f2f014f47df"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
