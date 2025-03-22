import "./Navbar.scss";
import Logo from "../../assets/IGL_Logo_Final_Color_Full.png";
import { RxDropdownMenu } from "react-icons/rx";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { analytics } from "../../firebase";
import { logEvent } from "firebase/analytics";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [flippedButton, setFlippedButton] = useState(null);

  // Inside your Navbar component
  const handleLoginClick = () => {
    logEvent(analytics, "login_button_click", {
      location: "navbar",
      timestamp: new Date().toISOString(),
    });
    setFlippedButton("login");
    setTimeout(() => setFlippedButton(null), 5000);
  };

  const handleRegisterClick = () => {
    logEvent(analytics, "register_button_click", {
      location: "navbar",
      timestamp: new Date().toISOString(),
    });
    setFlippedButton("register");
    setTimeout(() => setFlippedButton(null), 5000);
  };

  return (
    <>
      <header className="navbar">
        <nav className="navbar_container wrapper">
          <a
            href="#"
            className="navbar_logo"
            onClick={() => setShowMenu(false)}
          >
            <img src={Logo} alt="" className="logo" />
          </a>
          <ul className={`${showMenu ? "show" : ""}`}>
            <li onClick={() => setShowMenu(false)}>
              <a href="#">Leagues</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#">News</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#">Social</a>
            </li>
            {/* <li onClick={() => setShowMenu(false)}>
              <a href="#">App Store</a>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <a href="#">Play Store</a>
            </li> */}
          </ul>
          <div className="navbar_btns">
            <a
              href="#"
              className={`btn ${flippedButton === "login" ? "flip" : ""}`}
              onClick={handleLoginClick}
            >
              {flippedButton === "login" ? "Coming Soon" : "Login"}
            </a>
            <a
              href="#"
              className={`btn ${flippedButton === "register" ? "flip" : ""}`}
              onClick={handleRegisterClick}
            >
              {flippedButton === "register" ? "Coming Soon" : "Register"}
            </a>
          </div>
          <div className="navbar_menu" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <IoCloseCircle /> : <RxDropdownMenu />}
          </div>
        </nav>
      </header>
    </>
  );
}
