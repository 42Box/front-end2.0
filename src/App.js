import { Route, Routes } from "react-router-dom";

import RandingPage from "./component/Main/RandingPage";
import Auth from "./component/Auth/Auth";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScriptBoard/ScriptBoard";
import IconBoard from "./component/IconBoard/IconBoard";
import IconBoardNew from "./component/IconBoard/IconBoardNew";
import ServiceRegisterBoard from "./component/ServiceRegisterBoard/ServiceRegisterBoard";
import ScriptBoardNew from "./component/ScriptBoard/ScriptBoardNew";
import ScriptBoardContent from "./component/ScriptBoard/ScriptBoardContent";
import ServiceRegisterBoardContent from "./component/ServiceRegisterBoard/ServiceRegisterBoardContent";
import NotFound from "./component/Util/NotFound";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loginState } from "./recoil/states";

const App = () => {
  const setLoginValue = useSetRecoilState(loginState);

  useEffect(() => {
    if (localStorage.getItem("loginState")) setLoginValue(true);
  }, [setLoginValue]);

  return (
    <Routes>
      <Route path="/" element={<RandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/script/board" element={<ScriptBoard />} />
      <Route path="/icon/board" element={<IconBoard />} />
      <Route path="/icon/board/:postId" element={<RandingPage />} />
      <Route
        path="/service-register/board"
        element={<ServiceRegisterBoard />}
      />
      <Route path="/script/new" element={<ScriptBoardNew />} />
      <Route path="/icon/new" element={<IconBoardNew />} />
      {/* <Route path="/service-register/new" element={<ServiceRegisterBoardNew />} /> */}
      <Route path="/script/content/:postId" element={<ScriptBoardContent />} />
      {/* <Route path="/icon/content/:postId" element={<IconBoardContent />} /> */}
      <Route
        path="/service-register/content/:postId"
        element={<ServiceRegisterBoardContent />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
