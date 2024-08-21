import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <div className="error_Container">
      <h1>Page Not found</h1>
      <h2></h2>
    </div>
  );
};

export default ErrorComponent;
