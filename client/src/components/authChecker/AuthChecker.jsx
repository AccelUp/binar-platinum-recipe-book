import { Navigate } from "react-router-dom";

const AuthChecker = ({ children }) => {
  let access_token = localStorage.getItem("access_token");
  if (access_token) {
    return <Navigate to="/dashboard" replace="true" />;
  }
  return children;
};

export default AuthChecker;
