import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../actions/authAction";
import classes from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchRegister = async (e) => {
    e.preventDefault();

    if (
      formData.username === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setErrorText("Username, password, and confirmPassword are required");
    } else if (formData.password !== formData.confirmPassword) {
      setErrorText("Passwords do not match");
    } else {
      try {
        const response = await dispatch(register(formData, navigate));

        if (response.error) {
          setErrorText("Failed to register. Please check your credentials");
        }
      } catch (error) {
        console.error("Failed to register", error);
        setErrorText("An error occurred while registering.");
      }
    }
  };

  return (
    <div className={`${classes.Register} relative pt-20`}>
      <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-black rounded-md shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-primary font-bold leading-tight tracking-tight md:text-2xl">
              Sign up
            </h1>
            <form className="space-y-4" onSubmit={fetchRegister}>
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
              <div className="mb-4">
                <label
                  className="block font-semibold text-primary mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errorText ? "border-red-500" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                />
              </div>
              {errorText && (
                <div className="text-red-500 mb-4 p-2 bg-red-100 border border-red-400 rounded">
                  {errorText}
                </div>
              )}
              <button
                className="bg-primary hover:bg-black hover:text-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </form>
            <h2 className="mb-2 text-sm pt-2">
              Already have an account?{" "}
              <span
                onClick={navigateToLogin}
                className="text-primary cursor-pointer"
              >
                Login
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
