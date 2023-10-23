import { useNavigate } from "react-router-dom";
import clasess from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className={`${clasess.Login} relative`}>
        <div class="h-screen flex justify-center items-center">
          <div class="bg-blackk mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 class="text-primary  font-bold mb-8 text-center">Login</h1>
            <form>
              <div class="mb-4">
                <label
                  class="block font-semibold text-primary mb-2"
                  for="email"
                >
                  Email Address
                </label>
                <input
                  class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block font-semibold text-primary mb-2"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <h2 className="mb-2 text-sm pt-2">
                  Don&apos;t have an account?{" "}
                  <a
                    onClick={navigateToSignUp}
                    className="text-primary cursor-pointer"
                  >
                    Sign up
                  </a>
                </h2>
              </div>
              <div class="mb-6">
                <button
                  class="bg-primary hover:bg-black hover:text-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
