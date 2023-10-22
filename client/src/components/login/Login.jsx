import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <div>
        <div className="flex pt-20">
          <div className="flex justify-center items-center h-screen w-1/2 bg-black">
            <img
              className="object-cover h-full w-full" // Add Tailwind CSS classes
              src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?auto=format&fit=crop&q=80&w=2078&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="flex justify-center items-center h-screen w-1/2 bg-black">
            <div className="w-3/4 h-3/4 bg-yellow-500 rounded-md px-10 py-10">
              <h1 className="font-bold text-2xl">Welcome</h1>
              <div className="flex w-full justify-center pb-4">
                <button
                  href="signup"
                  className="flex w-full justify-center pt-8"
                  onClick={navigateToSignUp}
                >
                  <div className="h-12 w-full flex items-center justify-center border-2 hover:bg-slate-900 hover:text-white border-black rounded-lg">
                    Create new user
                  </div>
                </button>
              </div>
              <div className="flex flex-row pb-1">
                <hr className="w-1/2 my-3 mr-4 border-2 rounded-full border-black" />
                <p className="text-lg font-bold">or</p>
                <hr className="w-1/2 my-3 ml-4 border-2 rounded-full border-black" />
              </div>

              <div className="flex flex-col w-full justify-center pb-1">
                <h2 className="mb-2 text-md font-bold">Username</h2>
                <input
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Enter your username"
                />
              </div>
              <div className="flex flex-col w-full justify-center py-2">
                <h2 className="mb-2 text-md font-bold">Password</h2>
                <input
                  type="text"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Enter your password"
                />
              </div>
              <button href="/" className="flex w-full justify-center pt-6">
                <div className="h-12 w-full flex items-center justify-center border-2 hover:bg-slate-900 hover:text-white border-black rounded-lg">
                  Login
                </div>
              </button>
              <h2 className="mb-2 text-sm pt-2">
                Don&apos;t have an account?{" "}
                <a href="/signup" className="text-blue-500">
                  Sign up
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
