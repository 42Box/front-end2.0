import { Route, Routes } from "react-router-dom";

import RandingPage from "./component/Main/RandingPage";
import Auth from "./component/Auth/Auth";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScriptBoard/ScriptBoard";
import IconBoard from "./component/IconBoard/IconBoard";
import IconBoardNew from "./component/IconBoard/IconBoardNew";
import ServiceBoard from "./component/ServiceBoard/ServiceBoard";
import ServiceBoardNew from "./component/ServiceBoard/ServiceBoardNew";
import ScriptBoardContent from "./component/ScriptBoard/ScriptBoardContent";
import ScriptBoardNew from "./component/ScriptBoard/ScriptBoardNew";
import ServiceBoardContent from "./component/ServiceBoard/ServiceBoardContent";
import NotFound from "./component/Util/NotFound";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loginState, userState } from "./recoil/states";

const App = () => {
  const setLoginState = useSetRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);

  useEffect(() => {
    if (localStorage.getItem("loginState")) {
      setLoginState(true);
    }
    if (localStorage.getItem("userState")) {
      setUserState(JSON.parse(localStorage.getItem("userState")));
    }
  }, [setLoginState, setUserState]);

  return (
    <Routes>
      <Route path="/" element={<RandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/script/board" element={<ScriptBoard />} />
      <Route path="/icon/board" element={<IconBoard />} />
      <Route path="/icon/board/:postId" element={<RandingPage />} />
      <Route path="/service/board" element={<ServiceBoard />} />
      <Route path="/script/new" element={<ScriptBoardNew />} />
      <Route path="/icon/new" element={<IconBoardNew />} />
      <Route path="/service/new" element={<ServiceBoardNew />} />
      <Route path="/script/content/:postId" element={<ScriptBoardContent />} />
      {/* <Route path="/icon/content/:postId" element={<IconBoardContent />} /> */}
      <Route
        path="/service/content/:postId"
        element={<ServiceBoardContent />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
