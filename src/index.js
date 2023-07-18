import React from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp({
  apiKey: "AIzaSyCn3uqbALQsnVdEjY4Kgx-Bevx_LgxTa_k",
  authDomain: "pf-react-dc9d7.firebaseapp.com",
  projectId: "pf-react-dc9d7",
  storageBucket: "pf-react-dc9d7.appspot.com",
  messagingSenderId: "764298886844",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
