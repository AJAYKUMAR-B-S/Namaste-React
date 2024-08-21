import { useState, useEffect } from "react";
import logo from "../../../../public/Images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnData = "login";
  const [buttonInnerData, setButtonInnerData] = useState("login");

  return (
    <header className="header">
      <div className="logo_Container">
        <img alt="Website Logo" className="header_logo" src={logo}></img>
      </div>
      <nav className="nav_Container">
        <ul className="nav_Container_Ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Help</li>
          <li>sign in</li>
          <li>cart</li>
          <button
            className="login_button"
            onClick={() => {
              buttonInnerData === "login"
                ? setButtonInnerData("logout")
                : setButtonInnerData("login");
            }}
          >
            {buttonInnerData}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
