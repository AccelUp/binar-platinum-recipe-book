import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Users from "./components/user/Users";
import Login from "./components/login/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
