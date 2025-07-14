import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>메인 화면</h2>
        <p>여기에 대회별 랭킹, 포인트 랭킹, 차기 대회 일정 등이 표시될 예정입니다.</p>
      </main>
    </div>
  );
}

export default App;
