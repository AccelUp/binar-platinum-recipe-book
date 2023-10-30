import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/authAction";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState(""); // State untuk pesan kesalahan
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchLogin = async (e) => {
    e.preventDefault();

    if (formData.username === "" || formData.password === "") {
      setErrorText("Username and password are required"); // Set pesan kesalahan
    } else {
      try {
        const response = await dispatch(login(formData, navigate));
        if (response.error) {
          setErrorText("User not found. Please check your credentials.");
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setErrorText("An error occurred while logging in.");
      }
    }
  };

  return (
    <div className={`${classes.Login} relative pt-10`}>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-primary font-bold mb-8 text-center">Login</h1>
          {errorText && ( // Tampilkan pesan kesalahan jika ada
            <div className="text-red-500 mb-4 p-2 bg-red-100 border border-red-400 rounded">
              {errorText}
            </div>
          )}
          <form onSubmit={fetchLogin}>
            <div className="mb-4">
              <label
                className="block font-semibold text-primary mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errorText ? "border-red-500" : ""
                }`}
                id="username"
                name="username"
                value={formData.username}
                type="text"
                onChange={handleInputChange}
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-semibold text-primary mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errorText ? "border-red-500" : ""
                }`}
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <button
                className="bg-primary hover:bg-black hover:text-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <h2 className="mb-2 text-sm pt-2">
            Don't have an account?{" "}
            <span
              onClick={navigateToSignUp}
              className="text-primary cursor-pointer"
            >
              Sign up
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
