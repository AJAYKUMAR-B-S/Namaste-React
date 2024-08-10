import { useState } from "react";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  // let btnData = "login";
  const [buttonInnerData, setButtonInnerData] = useState("login");

  return (
    <header className="header">
      <div className="logo_Container">
        <img alt="Website Logo" className="header_logo" src={APP_LOGO}></img>
      </div>
      <nav className="nav_Container">
        <ul className="nav_Container_Ul">
          <li>About</li>
          <li>Contact</li>
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
