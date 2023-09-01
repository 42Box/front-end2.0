import BackGround from "../Util/BackGround";
import Header from "../Util/Header";
//import { userState } from "../../recoil/states";
//import { useRecoilValue } from "recoil";
import { Text, Image, Box } from "@chakra-ui/react";
import MyPosts from "./MyPosts";
import MyComments from "./MyComments";
import StatusMessage from "./StatusMessage";

const MyPage = () => {
  // const userStateValue = useRecoilValue(userState);
  const dummyUserState = {
    uuid: "8a8b9d71-3c10-4cbc-8b3a-ae1b5c215f40",
    nickname: "sechung",
    theme: 0,
    icon: "fox",
    urlList: [
      { name: "home", url: "https://42box.kr/" },
      { name: "23Coaltheme", url: "https://42box.github.io/front-end/" },
      { name: "loopback", url: "http://127.0.0.1:3000/" },
      { name: "Box 42", url: "https://42box.github.io/front-end/#/box" },
      { name: "Intra 42", url: "https://intra.42.fr" },
      { name: "Jiphyeonjeon", url: "https://42library.kr" },
      { name: "42STAT", url: "https://stat.42seoul.kr/home" },
      { name: "24Hane", url: "https://24hoursarenotenough.42seoul.kr" },
      { name: "80kCoding", url: "https://80000coding.oopy.io" },
      { name: "where42", url: "https://www.where42.kr" },
      { name: "cabi", url: "https://cabi.42seoul.io/" },
      { name: "42gg", url: "https://42gg.kr/" },
    ],
    statusMessage: "hello 42Box!",
    profileImageUrl:
      "https://cdn.intra.42.fr/users/73139f797eb48e61e4ba1d437171c56d/sechung.jpg",
    profileImagePath:
      "user_profile_image/a52671f9-fca9-43ad-b0c0-1c5360831cf2.png",
  };

  return (
    <BackGround>
      <Header pageTitle="마이페이지" />
      <Image
        src={dummyUserState.profileImageUrl}
        width="145px"
        height="145px"
        marginTop="51px"
        alignSelf="center"
        borderRadius="full"
        objectFit="cover"
      />
      <Text
        marginTop="20px"
        textAlign="center"
        fontWeight="700"
        fontSize="24px"
      >
        {dummyUserState.nickname}
      </Text>
      <StatusMessage dummyUserState={dummyUserState} />
      <MyPosts />
      <MyComments />
      <Box height="200px" />
    </BackGround>
  );
};

export default MyPage;
