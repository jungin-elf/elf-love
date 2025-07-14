// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 파이어베이스 콘솔에서 복사한 설정을 여기에 붙여넣으세요
const firebaseConfig = {
  apiKey: "AIzaSyB4H8JPogAUAQOoMe6qNIegrvQxQtgwJUw",
  authDomain: "elf-love-kr.firebaseapp.com",
  projectId: "elf-love-kr",
  storageBucket: "elf-love-kr.firebasestorage.app",
  messagingSenderId: "309196788026",
  appId: "1:309196788026:web:5de611ccc63128adf78003"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 인증 객체
const auth = getAuth(app);

// Firestore DB 객체
const db = getFirestore(app);

export { auth, db };
