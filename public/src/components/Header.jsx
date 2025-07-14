import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>엘프사랑 골프동호회</h1>
      <nav>
        <ul style={navListStyle}>
          <li>홈</li>
          <li>회원관리</li>
          <li>대회관리</li>
          <li>성적관리</li>
          <li>회비 및 자금관리</li>
          <li>공지사항 및 게시판</li>
          <li>로그인</li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#1e90ff",
  color: "white",
  padding: "10px 20px",
};

const navListStyle = {
  display: "flex",
  gap: "15px",
  listStyleType: "none",
  marginTop: "10px",
};

export default Header;
