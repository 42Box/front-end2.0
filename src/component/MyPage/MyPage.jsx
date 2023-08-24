import "./MyPage.css";

import Header from "../Util/Header";
import Container from "../Util/Container";
import MyProfile from "./MyProfile";
import MyContents from "./MyContents";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MyPage = () => {
  const navigate = useNavigate();
  // dummyUserData
  const userProfile = {
    profileImage:
      "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
    username: "jincpark",
    statusMessage: "Paris gazzzzaahhh!!!!!!",
    posts: [
      "미지의 신비: 지구에서 발견된 이상한 생물 10가지",
      "과학의 경계: 미래에서 온 것 같은 5가지 혁신적인 발명품",
      "인간 정신의 심장을 만나다: 강렬한 순간을 담은 7개의 사진 이야기",
    ],
    comments: [
      "과연 이 주제에 대해 당신은 얼마나 많이 알고 있을까요? 궁금하네요.",
      "이런 생각도 있는군요. 그렇다면 다른 관점도 한번 들어보시는 건 어떨까요?",
      "물론 그렇게 생각하셔도 돼요. 하지만 이 새로운 정보를 고려해보면 의견이 달라질 수도 있을 것 같아요.",
    ],
  };

  return (
    <Container>
      <Header
        pageTitle="마이페이지"
        leftButton={<AiOutlineArrowLeft onClick={() => navigate(-1)} />}
      />
      <div className="my-page">
        <MyProfile userProfile={userProfile} />
        <MyContents userProfile={userProfile} />
      </div>
    </Container>
  );
};

export default MyPage;
