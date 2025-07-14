// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 파이어베이스 콘솔에서 복사한 설정을 여기에 붙여넣으세요
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_AUTHDOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// 인증 객체
const auth = getAuth(app);

// Firestore DB 객체
const db = getFirestore(app);

export { auth, db };
