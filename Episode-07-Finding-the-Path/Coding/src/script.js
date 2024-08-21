import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import ErrorComponent from "./Components/Error";
import Contact from "./Components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//App Component
const App = () => {
  return (
    <div className="app_layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
