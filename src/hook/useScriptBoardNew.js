import { useState } from "react";
import apiCall from "../util/apiCall";
import { useNavigate } from "react-router-dom";

const useScriptBoardNew = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const getFormData = () => {
    const formData = new FormData();
    formData.append("script-file", selectedFile);
    formData.append(
      "body",
      JSON.stringify({
        title: inputTitle,
        content: inputDetail,
        scriptName: selectedFile.name,
      })
    );
    return formData;
  };

  const onPostSuccess = () => {
    console.log("Post successful!!!!!");
    navigate("/script/board");
  };

  const postFormData = () =>
    apiCall("POST", "board-service/script-boards", getFormData())
      .then(onPostSuccess)
      .catch((error) => console.error("Error posting script:", error));

  return {
    inputTitle,
    setInputTitle,
    inputDetail,
    setInputDetail,
    selectedFile,
    setSelectedFile,
    postFormData,
  };
};

export default useScriptBoardNew;
