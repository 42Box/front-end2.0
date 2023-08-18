import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScriptBoard from "./component/ScriptBoard";
import ScriptBoardNew from "./component/ScriptBoardNew";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boards/script-boards" element={<ScriptBoard />} />
        <Route
          path="/boards/script-boards/write"
          element={<ScriptBoardNew />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
