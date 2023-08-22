import { useState } from "react";

import "./MyStatusMessage.css";

const MyStatusMessage = ({ userProfile }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [newStatusMessage, setNewStatusMessage] = useState("");
  const handleStatusEdit = () => {
    setEditStatus(true);
    setNewStatusMessage(userProfile.statusMessage);
  };

  const handleStatusUpdate = () => {
    setEditStatus(false);
    // setNewStatusMessage()로새로운 상태 메시지를 저장하고, 서버에 업데이트 요청
  };

  return (
    <div>
      {editStatus ? (
        <div>
          <input
            type="text"
            value={newStatusMessage}
            onChange={(e) => setNewStatusMessage(e.target.value)}
          />
          <button onClick={handleStatusUpdate}>적용하기</button>
        </div>
      ) : (
        <div>
          <p>{userProfile.statusMessage}</p>
          <button onClick={handleStatusEdit}>Edit Status Message</button>
        </div>
      )}
    </div>
  );
};

export default MyStatusMessage;
