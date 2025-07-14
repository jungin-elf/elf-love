// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB4H8JPogAUAQOoMe6qNIegrvQxQtgwJUw",
  authDomain: "elf-love-kr.firebaseapp.com",
  projectId: "elf-love-kr",
  storageBucket: "elf-love-kr.firebasestorage.app",
  messagingSenderId: "309196788026",
  appId: "1:309196788026:web:5de611ccc63128adf78003",
  measurementId: "G-E61VEJRH8X"
};

const app = initializeApp(firebaseConfig);

export default app;
