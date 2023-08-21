import useAuth from "../hook/useAuth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const login = useAuth(); // hook function

  // it's called when component is rendering
  useEffect(() => {
    login();
  }, []);

  return <Navigate to="/" replace={true} />; // replace : do not add current url(auth page) to browser history
};

export default Auth;
