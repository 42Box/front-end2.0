import useOAuth from "../../api/useOAuth";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const Auth = () => {
  const login = useOAuth(); // hook function

  // it's called when component is rendering
  useEffect(() => {
    login();
  }, [login]);

  return <Navigate to="/" replace={true} />; // replace : do not add current url(auth page) to browser history
};

export default Auth;
