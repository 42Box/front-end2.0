import { Route, Routes } from "react-router-dom";

import RandingPage from "./component/Main/RandingPage";
import Auth from "./component/Auth/Auth";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScriptBoard/ScriptBoard";
import IconBoard from "./component/IconBoard/IconBoard";
import ServiceRegisterBoard from "./component/ServiceRegisterBoard/ServiceRegisterBoard";
import ScriptBoardNew from "./component/ScriptBoard/ScriptBoardNew";
import ScriptBoardContent from "./component/ScriptBoard/ScriptBoardContent";
import ServiceRegisterBoardContent from "./component/ServiceRegisterBoard/ServiceRegisterBoardContent";
import NotFound from "./component/Util/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/board/script" element={<ScriptBoard />} />
      <Route path="/board/icon" element={<IconBoard />} />
      <Route
        path="/board/service-register"
        element={<ServiceRegisterBoard />}
      />
      <Route path="/new/script" element={<ScriptBoardNew />} />
      {/* <Route path="/new/icon" element={<IconBoardNew />} />  */}
      {/* <Route path="/new/register" element={<ServiceRegisterBoardNew />} /> */}
      <Route path="/content/script/:id" element={<ScriptBoardContent />} />
      {/* <Route path="/content/icon/:id" element={<IconBoardContent />} /> */}
      <Route
        path="/content/service-register/:id"
        element={<ServiceRegisterBoardContent />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
