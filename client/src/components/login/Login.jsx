import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchLogin = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/recipebook/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          navigate("/dashboard");
        } else {
          setNotification(
            "Failed to login. Please check your username and password."
          );
        }
      } catch (error) {
        console.error("Failed to fetch user data.", error);
      }
    }
  };

  return (
    <div className={`${classes.Login} relative pt-10`}>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-black mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-primary font-bold mb-8 text-center">Login</h1>
          {notification && (
            <div className="text-red-500 mb-4">{notification}</div>
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
                  errors.username ? "border-red-500" : ""
                }`}
                id="username"
                name="username"
                value={formData.username}
                type="text"
                onChange={handleInputChange}
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 text-xs">{errors.username}</p>
              )}
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
                  errors.password ? "border-red-500" : ""
                }`}
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password}</p>
              )}
              <h2 className="mb-2 text-sm pt-2">
                Don't have an account?
                <span
                  onClick={navigateToSignUp}
                  className="text-primary cursor-pointer"
                >
                  Sign up
                </span>
              </h2>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
