import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import InputWrapper from "../../components/InputWrapper";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Signin = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
        <h1>Sign In</h1>
        <form>
          <InputWrapper label="Username" inputType="text" id="username" />

          <InputWrapper label="Password" inputType="text" id="password" />

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Link to="/user">
            <Button className="sign-in-button" 
            text="Sign In"  />
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Signin;
