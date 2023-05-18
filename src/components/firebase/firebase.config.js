// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5EeuqX1GMHIlFYanQ1-sUjkEF0_NztvE",
  authDomain: "toyland-shop-client.firebaseapp.com",
  projectId: "toyland-shop-client",
  storageBucket: "toyland-shop-client.appspot.com",
  messagingSenderId: "868065715655",
  appId: "1:868065715655:web:a3f3176677117c3802a5e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;