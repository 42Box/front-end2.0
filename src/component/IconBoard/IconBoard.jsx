import "./IconBoard.css";

import Container from "../Util/Container";
import Header from "../Util/Header";
import WriteButton from "../Util/Button/WriteButton";
import IconGalleryView from "./IconGalleryView";


const IconBoard = () => {
  // const [iconList, setIconList] = useState([]);
  //
  // useEffect(() => {
  //   fetchIconLIst;
  // }, []);
  //
  // const fetchIconList = async () => {
  //   const res = await axios.get(
  //     "https://42box.site/api/user-service/boards/icon-boards",
  //   );
  //   const rawIconList = res.data.xx; // (이미지파일 요청 -> 응답 데이터로 어떤 변수를 쓸지, 그 변수에 값을 어떻게 담을지 백과 결정
  // };

  return (
    <Container>
      <Header
        pageTitle="아이콘 게시판"
        rightButton={<WriteButton path="/icon/new" />}
      />
      <IconGalleryView />
    </Container>
  );
};

export default IconBoard;
