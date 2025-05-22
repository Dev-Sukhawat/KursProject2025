import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import NoPage from "./pages/nopage.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Likes from "./pages/likes.jsx";
import Cart from "./pages/cart.jsx";
import Sell from "./pages/sell.jsx";
import About from "./pages/about.jsx";
import Support from "./pages/support.jsx";
import Topics from "./pages/topics.jsx";
import Category from "./pages/category.jsx";
import Underdeveloped from "./pages/underdeveloped.jsx";

function App() {
  const appRoutes = [
    <Route path="/" element={<Home />} key="home" />,
    <Route path="*" element={<NoPage />} key="noPage" />,
    <Route path="/login" element={<Login />} key="login" />,
    <Route path="/signup" element={<Signup />} key="signup" />,
    <Route path="/likes" element={<Likes />} key="likes" />,
    <Route path="/cart" element={<Cart />} key="cart" />,
    <Route path="/sell" element={<Sell />} key="sell" />,
    <Route path="/about" element={<About />} key="about" />,
    <Route path="/support" element={<Support />} key="support" />,
    <Route
      path="/underdeveloped"
      element={<Underdeveloped />}
      key="underdeveloped"
    />,
    <Route path="/topics/:list" element={<Topics />} key="topics" />,
    <Route path="/category/:list" element={<Category />} key="category" />,
  ];

  return (
    <>
      <Router>
        <Routes>{appRoutes}</Routes>
      </Router>
    </>
  );
}

export default App;
