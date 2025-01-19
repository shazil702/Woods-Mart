// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbnmuKt97lRQXbusaezLBPZyXyf1-IzHc",
  authDomain: "custom-ecommerce-bfc09.firebaseapp.com",
  projectId: "custom-ecommerce-bfc09",
  storageBucket: "custom-ecommerce-bfc09.firebasestorage.app",
  messagingSenderId: "144124807424",
  appId: "1:144124807424:web:a0cbe5d0c8bd8ca6b94be5",
  measurementId: "G-NWMF518QST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

function submit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password!== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        const user = userCredential.user;
        alert('user created successfully')
        window.location.href = '/pages/login.html'
     })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', submit); 
})