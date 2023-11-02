import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Recipe from "./components/modules/detail.recipe";
import BrowseRecipe from "./components/modules/browse.recipe";
import AddRecipe from "./components/formRecipe/addRecipe";
import Dashboard from "./dashboard/modules/Dashboard";
import AuthChecker from "./components/authChecker/AuthChecker";
import EditRecipe from "./components/formRecipe/editRecipe";
// import UserActivation from "./components/authChecker/UserActivation";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/activate" element={<UserActivation />} /> */}
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/browserecipe" element={<BrowseRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/*"
            element={
              <AuthChecker>{isLoggedIn ? <Dashboard /> : <Home />}</AuthChecker>
            }
          />
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
