import { Flex, Icon, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ReactComponent as PlusBlackIcon } from "../../asset/plus-black.svg";
import apiCall from "../../util/apiCall";
import { userState } from "../../recoil/states";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/states";
import { useRecoilValue } from "recoil";

const UrlBar = ({ postInfo }) => {
  const [userStateValue, setUserStateValue] = useRecoilState(userState);
  const isLogin = useRecoilValue(loginState);

  const updateUrlListHandler = () => {
    if (!isLogin) {
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    const newUrl = { name: postInfo.serviceName, url: postInfo.serviceUrl };
    const oldUrlList = userStateValue.urlList;
    const newUrlList = [...oldUrlList, newUrl];

    apiCall("PUT", "user-service/users/me/url-list", { urlList: newUrlList })
      .then((response) => {
        setUserStateValue({
          ...userStateValue,
          urlList: response.data.urlList,
        });
        console.log("updating urlList success!!");
        console.log("updated urlList: ", userStateValue.urlList);
      })
      .catch((error) => {
        console.log("error fetching urlList", error);
      });
    window?.webkit?.messageHandlers.saveURL.postMessage(JSON.stringify(newUrl));
  };

  return (
    <Flex
      alignSelf="center"
      height="45px"
      borderRadius="12px"
      border="1px solid #DDDDDD"
      width="500px"
      fontSize="20px"
      fontWeight="600"
      alignItems="center"
      paddingLeft="5px"
      paddingRight="3px"
    >
      <a href={postInfo?.serviceUrl}>
        <Icon
          as={ExternalLinkIcon}
          color="#AAAAAA"
          height="20px"
          width="20px"
          boxSize="8"
          borderRadius="12px"
          _hover={{ background: "#EEEEEE" }}
        />
      </a>
      <Text paddingTop="8px" height="45px" width="500px" align="center">
        {postInfo?.serviceUrl}
      </Text>
      <Icon
        onClick={updateUrlListHandler}
        as={PlusBlackIcon}
        boxSize="10"
        borderRadius="12px"
        _hover={{
          background: "#EEEEEE",
        }}
        cursor="pointer"
      />
    </Flex>
  );
};

export default UrlBar;
