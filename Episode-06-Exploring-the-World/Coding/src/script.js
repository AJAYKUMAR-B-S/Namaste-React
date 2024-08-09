import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

//App Component
const App = () => {
  return (
    <div className="app_layout">
      <Header />
      <Main />
    </div>
  );
};

root.render(<App />);
