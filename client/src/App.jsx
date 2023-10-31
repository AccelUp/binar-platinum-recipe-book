import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/modules/home";
import Users from "./components/user/Users";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Recipe from "./components/modules/detail.recipe";
import BrowseRecipe from "./components/modules/browse.recipe";
import Dashboard from "./dashboard/modules/Dashboard";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/browserecipe" element={<BrowseRecipe />} />
          <Route path="/users" element={<Users />} />
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
