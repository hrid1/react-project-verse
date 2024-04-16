// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5isfdzBbJvS9giTHViZ6YKhb4iy5ijWQ",
  authDomain: "stack-news-df9b1.firebaseapp.com",
  projectId: "stack-news-df9b1",
  storageBucket: "stack-news-df9b1.appspot.com",
  messagingSenderId: "452600547160",
  appId: "1:452600547160:web:1415a925daa773965d472d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;