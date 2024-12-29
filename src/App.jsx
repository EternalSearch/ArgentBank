import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Signin";
import User from "./pages/User";
import "./assets/css/style.css";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} /> 
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};

export default App;
