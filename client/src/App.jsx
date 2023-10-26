import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Users from "./components/user/Users";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Recipe from "./components/modules/detail.recipe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
