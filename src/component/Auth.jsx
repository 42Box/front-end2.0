import useAuth from "../hook/useAuth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const login = useAuth();

  useEffect(() => {
    login();
  }, []);

  return <Navigate to="/" replace={true} />;
};

export default Auth;
