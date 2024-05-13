// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWKZAirxZ42CiBIFe3HBJXvBRpKuFyOo",
  authDomain: "travel-nest-a6e17.firebaseapp.com",
  projectId: "travel-nest-a6e17",
  storageBucket: "travel-nest-a6e17.appspot.com",
  messagingSenderId: "655386325607",
  appId: "1:655386325607:web:074f72f552261165e65ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
