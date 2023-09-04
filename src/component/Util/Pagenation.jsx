import { Flex, Icon } from "@chakra-ui/react";
import PagenationButton from "./Button/PagenationButton";
import { ReactComponent as PrevIcon } from "../../asset/previous.svg";
import { ReactComponent as NextIcon } from "../../asset/next.svg";
import { ReactComponent as PrevInvalidIcon } from "../../asset/previousInvalid.svg";
import { ReactComponent as NextInvalidIcon } from "../../asset/nextInvalid.svg";
import PageNumbers from "./PageNumbers";

const Pagenation = ({ onPagenation, current, totalPages }) => {
  current = parseInt(current);
  let last = parseInt(totalPages) - 1;

  const nextHandler = () => {
    if (current < last) {
      onPagenation(current + 1);
    }
  };

  const previousHandler = () => {
    if (current > 0) {
      onPagenation(current - 1);
    }
  };

  return (
    <Flex
      width="704px"
      height="47px"
      justifyContent="space-between"
      alignSelf="center"
      alignItems="center"
    >
      <PagenationButton
        onClick={previousHandler}
        color={current === 0 ? "#8E8E8E" : "#FF9548"}
        _hover={
          current === 0 ? { background: "none" } : { background: "#FFF0E5" }
        }
      >
        <Icon as={current === 0 ? PrevInvalidIcon : PrevIcon} />
        이전
      </PagenationButton>
      <PageNumbers current={current} last={last} onPagenation={onPagenation} />
      <PagenationButton
        onClick={nextHandler}
        color={current === last ? "#8E8E8E" : "#FF9548"}
        _hover={
          current === last ? { background: "none" } : { background: "#FFF0E5" }
        }
      >
        다음
        <Icon as={current === last ? NextInvalidIcon : NextIcon} />
      </PagenationButton>
    </Flex>
  );
};

export default Pagenation;
