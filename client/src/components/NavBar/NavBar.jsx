import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components here
// import Home from "../components/Home";
// import Recipe from "../components/Recipe";
// import Category from "../components/Category";
// import Login from "../components/Login";

const NavBar = () => {
  return (
    <Router>
      <nav className="flex justify-center items-center h-20 w-screen bg-slate-50 backdrop-filter backdrop-blur-md fixed">
        <div className="flex justify-center items-center w-1/3 h-full">
          <span className="text-2xl">
            <a href="/" className="text-black">
              Recipe
            </a>
          </span>
        </div>
        <div className="flex justify-center items-center w-1/3 h-full">
          <div className="flex justify-around border-b border-black p-4">
            <div className="flex items-center justify-center w-20 rounded-full">
              <a href="/recipe" className="text-black">
                Recipe
              </a>
            </div>
            <div className="flex items-center justify-center w-20 rounded-full">
              <a href="/" className="text-black">
                Home
              </a>
            </div>
            <div className="flex items-center justify-center w-20 rounded-full">
              <a href="/category" className="text-black">
                Category
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/3 h-full">
          <span className="py-2 px-6 rounded-full bg-orange-500">
            <a href="/login" className="text-black">
              Login
            </a>
          </span>
        </div>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default NavBar;
