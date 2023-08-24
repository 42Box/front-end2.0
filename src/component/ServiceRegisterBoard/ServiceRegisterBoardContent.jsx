import "./ServiceRegisterBoardContent.css";

import Header from "../Util/Header";
import Container from "../Util/Container";
import { FaEllipsis } from "react-icons/fa6";

import CommentNew from "../Comment/CommentNew";
import CommentList from "../Comment/CommentList";

import dummyRegisterComments from "../../dummyRegisterComments";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ServiceRegisterBoardContent = () => {
  const navigate = useNavigate();
  return (
    <Container backgroundColor="#ffffff">
      <Header
        pageTitle="서비스 등록 게시판"
        leftButton={<AiOutlineArrowLeft onClick={() => navigate(-1)} />}
        rightButton={<FaEllipsis className="see-options" />}
      />
      <div className="comments-section">
        <div className={"title"}>
          <div>title: DUMMY TITLE</div>
          <div>author: jincpark date: 2023.08.19.Sat</div>
        </div>
        <a href="42box.kr">42box.kr</a>
        <div>
          저희가 정말 열심히 만든 서비스입니다.... 42box에 올려주실 수 있는지
          재고 부탁드립니다....간ㅇ절합니다
        </div>
        <div>
          <div>
            <button>실행</button>
            <button>다운로드</button>
          </div>
          <div>
            <button>좋아요</button>
            <button>안돼요</button>
          </div>
        </div>
        <CommentNew />
        <CommentList comments={dummyRegisterComments}></CommentList>
      </div>
    </Container>
  );
};

export default ServiceRegisterBoardContent;
