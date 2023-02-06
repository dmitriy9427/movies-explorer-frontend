import { Navigate } from "react-router-dom";

const ProtectedRouteNav = ({ loggedIn, children }) => {
  return !loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRouteNav;
