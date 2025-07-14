import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./pages/Signup"; // 추가

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding:
