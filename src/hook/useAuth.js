import useSetRecoilState from "recoil";
import useApi from "../hook/useApi";
import userState from "../atom/userState";

const useAuth = () => {
  const request = useApi("GET", "auth-service", ""); // GET 42box.site/api/auth-service
  const setUser = useSetRecoilState(userState); // set hook

  // set userState with new user when useAuth is called on success response
  const onSuccess = (response) => {
    const { data } = response;
    const newUser = {
      isLoggedIn: true,
      intraId: data.intraId,
      // isAdmin
      // expire
      // ...
    };
    setUser(newUser);
    window.localStorage.setItem("user", JSON.stringify(newUser));
  };

  const onFailure = (error) => {
    const errorCode = parseInt(error?.response?.data?.errorCode, 10);
    //const [title, message] = getErrorMessage(errorCode).split("\r\n");
    window.localStorage.setItem(
      "error",
      JSON.stringify({ title, message: errorCode ? message : error.message })
    );
  };

  return () => request(onSuccess, onFailure); // return function
};

export default useAuth;
