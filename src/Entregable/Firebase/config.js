
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3aTqPwB1X46ldmaLC7RU_7PCEX8tYYjc",
  authDomain: "react-app-de5ca.firebaseapp.com",
  projectId: "react-app-de5ca",
  storageBucket: "react-app-de5ca.appspot.com",
  messagingSenderId: "394092493165",
  appId: "1:394092493165:web:3c7edf15f47992e5d58264"
};


const app = initializeApp(firebaseConfig);

export const fireStoreInit = () => app
