import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputWrapper from "../../components/InputWrapper";
import { loginUser } from "../../Redux/Actions/data_action2";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth?.error || null);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };
  const handleCheckboxChange = () => {
    setRememberMe((prev) => !prev); // Alterne entre true et false
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials.email, credentials.password, rememberMe));
  };

  // Redirection automatique en cas d'authentification réussie
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputWrapper
            label="Email"
            inputType="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            error={error && "Invalid email"}
          />
          <InputWrapper
            label="Password"
            inputType="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            error={error && "Invalid password"}
          />
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button type="submit" text="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  );
};

export default Signin;
