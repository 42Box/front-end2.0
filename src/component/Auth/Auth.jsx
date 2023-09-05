import useOAuth from "../../api/useOAuth";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";

const Auth = () => {
  const login = useOAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    login()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("OAuth login error:", error);
        setIsLoading(false);
      });
  }, [login]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return <Navigate to="/" replace={true} />;
};

export default Auth;
