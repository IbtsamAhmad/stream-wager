import { useState, useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaFile } from "react-icons/fa";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/menu.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.scss";

function Header() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const crimeMapUser = localStorage.getItem("crimeMapUser");
    if (token) {
      setIsLoggedIn(true);
      setUser(crimeMapUser);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("crimeMapUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="header container">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      </div>
      <div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">List bets</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/">FAQs</Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
            <Link to="/">Sign in</Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}>
          <Link to="/">Sign up</Link>
          </li>
        </ul>
      </div>
      <div className="signin-up">
        <Button
          shape="round"
          onClick={() => navigate("/register")} 
          className="app-btn signup-button"
        >
          Sign up
        </Button>
        <Button
          shape="round"
          onClick={() => navigate("/login")} 
          className="app-btn login-button"
        >
          Log in
        </Button>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
