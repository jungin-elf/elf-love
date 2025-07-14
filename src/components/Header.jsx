import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>엘프사랑 골프동호회</h1>
      <nav>
        <ul style={navListStyle}>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/login">로그인</Link></li>
          {/* 추후 회원관리, 대회관리 등 메뉴도 추가 예정 */}
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
