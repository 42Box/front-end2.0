import { Route, Routes } from "react-router-dom";

import RandingPage from "./component/Main/RandingPage";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScriptBoard/ScriptBoard";
import ScriptBoardSelect from "./component/ScriptBoard/ScriptBoardSelect";
import IconBoard from "./component/IconBoard/IconBoard";
import ServiceRegisterBoard from "./component/ServiceRegisterBoard/ServiceRegisterBoard";
import ServiceRegisterBoardSelect from "./component/ServiceRegisterBoard/ServiceRegisterBoardSelect";
import Auth from "./component/Auth/Auth";
import NotFound from "./component/Util/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RandingPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-page" element={<MyPage />} />
      <Route path="/boards/script-boards" element={<ScriptBoard />} />
      <Route path="/boards/script-boards/:id" element={<ScriptBoardSelect />} />
      <Route path="/boards/Icon-boards" element={<IconBoard />} />
      <Route
        path="/boards/service-register-boards"
        element={<ServiceRegisterBoard />}
      />
      <Route
        path="/boards/service-register-boards/:id"
        element={<ServiceRegisterBoardSelect />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
