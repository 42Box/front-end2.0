import "./MyProfile.css";

import MyStatusMessage from "./MyStatusMessage";

const MyProfile = ({ userProfile }) => {
  return (
    <div className="my-profile">
      <div>
        <img src={userProfile.profileImage} alt="Profile" />
      </div>
      <h2>{userProfile.username}</h2>
      <MyStatusMessage userProfile={userProfile} />
    </div>
  );
};

export default MyProfile;
