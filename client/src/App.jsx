import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Users from "./components/user/Users";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
