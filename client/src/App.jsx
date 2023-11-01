import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Recipe from "./components/modules/detail.recipe";
import BrowseRecipe from "./components/modules/browse.recipe";
import AddRecipe from "./components/formRecipe/AddRecipe";
import Dashboard from "./dashboard/modules/Dashboard";
import AuthChecker from "./components/authChecker/AuthChecker";
import EditRecipe from "./components/formRecipe/editRecipe";
import UserActivation from "./components/userActivation/UserActivation";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home to="/" replace={true} />} />
          <Route
            path="/"
            element={
              <AuthChecker>
                {""} <Home /> {""}
              </AuthChecker>
            }
          />
          <Route path="/activate" element={<UserActivation />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/browserecipe" element={<BrowseRecipe />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
