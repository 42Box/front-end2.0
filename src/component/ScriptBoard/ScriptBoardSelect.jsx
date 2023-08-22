import { useParams } from "react-router-dom";

import ScriptBoardContent from "./ScriptBoardContent";
import ScriptBoardNew from "./ScriptBoardNew";

const ScriptBoardSelect = () => {
  const params = useParams();
  const { id } = params;

  if (id === "new") {
    return <ScriptBoardNew />;
  }
  return <ScriptBoardContent id={id} />;
};

export default ScriptBoardSelect;
