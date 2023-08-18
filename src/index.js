import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// 사용자 인터페이스의 기본 진입점 혹은 메인 훅 생성
// id='root' 인 <div> 가리킴, React로 만들어진 interface는 여기에 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
// "root" <div>의 콘텐츠는 <App />으로 대체됨
// JSX syntax
root.render(<App />);
