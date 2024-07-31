import React from "react";
import ReactDOM from "react-dom/client";

// Headers
//   website logo
//    Nav Bar
//      Home
//      About
//      Contact
// Body
//   searchContainer
//    Search Bar
// CardContainer
//   card
//    cardImg
//    cardDetails
// Footer
//   address
//   social media icons
//   copyright
//   terms and conditions
//   privacy policy
//   contact us

//root to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo_Container">
        <img
          alt="Website Logo"
          className="header_logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717113600&semt=ais_user"
        ></img>
      </div>
      <nav className="nav_Container">
        <ul className="nav_Container_Ul">
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
          <li>sing in</li>
          <li>cart</li>
        </ul>
      </nav>
    </header>
  );
};

//App Component
const App = () => {
  return (
    <div className="app_layout">
      <Header />
    </div>
  );
};

root.render(<App />);
