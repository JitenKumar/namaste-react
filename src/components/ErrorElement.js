import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const error = useRouteError();
  return (
    <div className="error-element">
      <h1>Oooops SOmething went wrong</h1>
      <h2>{error.status}</h2>
      <h2>{error.statusText}</h2>
    </div>
  );
};
export default ErrorElement;
