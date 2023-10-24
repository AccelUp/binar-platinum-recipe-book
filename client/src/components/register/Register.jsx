import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clasess from "../login/Login.module.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.username === "") {
      newErrors.username = "username is required";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/recipebook/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          navigate("/login");
        } else {
          console.error("Failed to create user.");
        }
      } catch (error) {
        console.error("Failed to fetch user data.", error);
      }
    }
  };

  return (
    <>
      <div className={`${clasess.Login} relative pt-20`}>
        <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-black rounded-md shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-primary font-bold leading-tight tracking-tight md:text-2xl">
                Sign up
              </h1>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="form-input">
                  <label className="block mb-2 font-medium text-primary">
                    Your username
                  </label>
                  <input
                    type="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.username ? "border-red-500" : ""
                    }`}
                    placeholder="username"
                    required=""
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs">{errors.username}</p>
                  )}
                </div>
                <div className="form-input">
                  <label className="block mb-2 font-medium text-primary">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5${
                      errors.password ? " border-red-500" : ""
                    }`}
                    required=""
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">{errors.password}</p>
                  )}
                </div>
                <div className="form-input pb-5">
                  <label className="block mb-2 font-medium text-primary">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    required=""
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-black hover:text-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover-bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-white pb-4">
                  Already have an account?
                  <a
                    href="/login"
                    className="font-medium text-primary-600 text-primary"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
