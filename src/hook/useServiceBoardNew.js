import { useState } from "react";
import apiCall from "../util/apiCall";
import { useNavigate } from "react-router-dom";

const useScriptBoardNew = () => {
  const navigate = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputServiceUrl, setInputServiceUrl] = useState("");

  const getFormData = () => {
    const formData = new FormData();
    formData.append("image-file", selectedImage);
    formData.append(
      "body",
      JSON.stringify({
        title: inputTitle,
        content: inputDetail,
        serviceUrl: inputServiceUrl,
      })
    );
    return formData;
  };

  const onPostSuccess = () => {
    console.log("Post successful!!!!!");
    navigate("/service/board");
  };

  const postFormData = () =>
    apiCall("POST", "board-service/service-boards", getFormData())
      .then(onPostSuccess)
      .catch((error) => console.error("Error posting service:", error));

  return {
    inputTitle,
    setInputTitle,
    inputDetail,
    setInputDetail,
    inputServiceUrl,
    setInputServiceUrl,
    selectedImage,
    setSelectedImage,
    postFormData,
  };
};

export default useScriptBoardNew;
