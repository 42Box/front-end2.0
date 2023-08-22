import { BrowserRouter, Route, Routes } from "react-router-dom";

import RandingPage from "./component/main/RandingPage";
import MyPage from "./component/MyPage/MyPage";
import ScriptBoard from "./component/ScripBoard/ScriptBoard";
import ScriptBoardSelect from "./component/ScripBoard/ScriptBoardSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandingPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/boards/script-boards" element={<ScriptBoard />} />
        <Route
          path="/boards/script-boards/:id"
          element={<ScriptBoardSelect />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
