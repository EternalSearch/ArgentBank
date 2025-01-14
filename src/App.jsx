import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import User from "./pages/User";
import Signin from "./pages/Signin";
import "./assets/css/style.css";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { loginSuccess } from "./Redux/Actions/data_action2.jsx";


const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      dispatch(loginSuccess({ token }));
    }

    setLoading(false); 
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;  
  }

  return (

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="/signin" element={<Signin />} />

        </Routes>
        <Footer />
      </Router>

  );
};
export default App;