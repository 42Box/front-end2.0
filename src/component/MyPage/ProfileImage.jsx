import { Image } from "@chakra-ui/react";
import { useRef } from "react";
import FileSizeTooBigModal from "../Util/Modal/FileSizeTooBigModal";
import { useState } from "react";
import apiCall from "../../util/apiCall";

const ProfileImage = ({ userState, setUserState }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      if (event.target.files[0].size <= 100 * 1024) {
        const formData = new FormData();
        formData.append("profile-image", event.target.files[0]);
        apiCall("PUT", "user-service/users/me/profile-image", formData)
          .then((response) => {
            setUserState({
              ...userState,
              bigProfileImagePath: response.data.bigProfileImagePath,
              profileImagePath: response.data.profileImagePath,
            });
          })
          .catch((error) => {
            console.log("file upload failed", error);
          });
      } else {
        setIsModalOpen(true);
      }
    }
  };

  const fileInputRef = useRef(null);

  return (
    <>
      <input
        type="file"
        accept="image/png"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Image
        src={"https://42box.kr/" + userState.bigProfileImagePath}
        onClick={handleImageClick}
        width="145px"
        height="145px"
        marginTop="51px"
        alignSelf="center"
        borderRadius="full"
        objectFit="cover"
        cursor="pointer"
      />
      <FileSizeTooBigModal
        fileSizeLimit="100KB"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProfileImage;
