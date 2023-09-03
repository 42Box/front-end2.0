export const errorHandling = (response, navigate, errorAlert) => {
  if (!response) {
    errorAlert.openAlert({
      title: "잠시 흐린눈 부탁",
      content: "💥💥",
    });
    return;
  }
  if (response.status === 400) {
    errorAlert.openAlert({
      title: "요청이 잘못되었습니다😣",
      content: "400💥",
    });
  } else if (response.status === 401) {
    errorAlert.openAlert({
      title: "다시 로그인해주세요!",
      content: "💥401💥",
    });
    window.localStorage.removeItem("loginState");
    // navigate("/");
  } else if (response.status === 404) {
    errorAlert.openAlert({
      title: "없는 데이터입니다!",
      content: "💥404💥",
    });
  } else if (response.status === 500 || response.status === 503) {
    errorAlert.openAlert({
      title: "서버 에러(신고 부탁드립니다🙏)",
      content: "💥50X💥",
    });
  } else {
    errorAlert.openAlert({
      title: "알 수 없는 에러(신고 부탁드립니다🙏)",
      content: "🥲",
    });
  }
};
