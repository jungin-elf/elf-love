// src/App.jsx
import React, { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>⛳ 엘프사랑 골프동호회</h1>
      {user ? (
        <div>
          <p>환영합니다, {user.email} 님!</p>
          <button onClick={() => firebase.auth().signOut()}>로그아웃</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
