import { BrowserRouter, Route, Routes } from "react-router-dom";

import ScriptBoard from "./component/ScriptBoard";
import ScriptBoardSelect from "./component/ScriptBoardSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
