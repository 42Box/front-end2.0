import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start().catch((Error) => console.log(Error));
}

// 사용자 인터페이스의 기본 진입점 혹은 메인 훅 생성
// id='root' 인 <div> 가리킴, React로 만들어진 interface는 여기에 렌더링
const root = ReactDOM.createRoot(document.getElementById("root"));
// "root" <div>의 콘텐츠는 <App />으로 대체됨
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
