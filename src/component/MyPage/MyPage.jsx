import BackGround from "../Util/BackGround";
import Header from "../Util/Header";
import { userState } from "../../recoil/states";
import { loginState } from "../../recoil/states";
import { useRecoilState, useRecoilValue } from "recoil";
import { Text, Box } from "@chakra-ui/react";
import MyPosts from "./MyPosts";
import MyComments from "./MyComments";
import StatusMessage from "./StatusMessage";
import ProfileImage from "./ProfileImage";
import WrongApproach from "../Util/WrongApproach";

const MyPage = () => {
  const [userStateValue, setUserStateValue] = useRecoilState(userState);
  const isLogin = useRecoilValue(loginState);

  if (!isLogin) {
    return <WrongApproach />;
  }

  return (
    <BackGround>
      <Header pageTitle="마이페이지" allowHomeNavigate={true} />
      <ProfileImage
        userState={userStateValue}
        setUserState={setUserStateValue}
      />
      <Text
        marginTop="20px"
        textAlign="center"
        fontWeight="700"
        fontSize="24px"
      >
        {userStateValue.nickname}
      </Text>
      <StatusMessage
        userState={userStateValue}
        setUserState={setUserStateValue}
      />
      <MyPosts />
      <MyComments />
      <Box height="200px" />
    </BackGround>
  );
};

export default MyPage;
