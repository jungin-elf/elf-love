import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";  // 로그인 컴포넌트 위치에 맞게 경로 조정
import Home from "./pages/Home";    // 메인 페이지 컴포넌트도 만들어야 함

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
