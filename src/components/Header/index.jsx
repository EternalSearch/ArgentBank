import Logo from "../../assets/images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/data_action2";
import { useEffect } from "react";
import { getUserProfile } from "../../Redux/Actions/update_name";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userName = useSelector((state) => state.user?.userProfile?.userName); // Récupère le userName
 

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && !userName) {
      dispatch(getUserProfile());
    }
  }, [isAuthenticated, userName, dispatch]);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()); 
    localStorage.removeItem("token") || sessionStorage.removeItem("token");
    localStorage.removeItem("userProfile") || sessionStorage.removeItem("userProfile");
    navigate("/"); 
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div className="main-nav-items">
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              <span>{userName}{" "}</span>
            </Link>
            <Link className="main-nav-item" onClick={handleLogout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Sign Out</span>
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/signin">
            <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
