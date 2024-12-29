import Logo from '../../assets/images/argentBankLogo.webp';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (

        <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
        <Link className="main-nav-item" to="/signin">
            <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
            Sign In
          </Link>

        </div>
      </nav>
     
      
    )
}

export default Header