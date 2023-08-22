import { BrowserRouter, Route, Routes } from "react-router-dom";

import RandingPage from "./component/main/RandingPage";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScriptBoard/ScriptBoard";
import ScriptBoardSelect from "./component/ScriptBoard/ScriptBoardSelect";
import IconBoard from "./component/IconBoard/IconBoard";
import Auth from "./component/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/boards/script-boards" element={<ScriptBoard />} />
        <Route
          path="/boards/script-boards/:id"
          element={<ScriptBoardSelect />}
        />
        <Route path="/boards/Icon-boards" element={<IconBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
