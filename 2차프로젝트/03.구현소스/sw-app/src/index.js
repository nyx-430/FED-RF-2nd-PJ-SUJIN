import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// 컴포넌트 불러오기
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Story from "./components/pages/Story";
import Shop from "./components/pages/Shop";
import MemberShip from "./components/pages/MemberShip";
import Detail from "./components/pages/Detail";
import SearchPage from "./components/pages/SearchPage";
import Login from "./components/pages/Login";
import Member from "./components/pages/Member";
import CartList from "./components/modules/CartList";

// 전체 공통 CSS
import "../src/css/index.scss";

export default function MainComponent() {
  // Shop 리스트
  const shopList = ["", "promotion", "perfume", "bodycare", "handcare", "giftset"];

  return (
    // 라우터 루트로 라우터 구성 시작
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* 라우터 경로 변경시 최상단이동 컴포넌트 */}
      <ScrollTop />
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정!
        루트 Route는 홀로 닫지 말고 반드시 다른 하위 라우트를 감싸도록 한다!!! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path 설정 대신 index 키워드를 쓰면 
        첫 페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에 출력된다! */}
          <Route index element={<Main />} />
          <Route path="/story" element={<Story />} />
          {shopList.map((v,i) => (
            <Route key={i} path={`/shop/${v}`} element={<Shop />} />
          ))}
          <Route path="/membership" element={<MemberShip />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/member" element={<Member />} />
          <Route path="/cart" element={<CartList />} />
        </Route>
        {/* Layout 루트 Route로 하위 Route를 감싼다! */}
      </Routes>
    </BrowserRouter>
  );
}

/******************************************* 
  컴포넌트로 만들고 라우터 안에 넣고
  라우터 경로변경시 스크롤 최상단이동
*******************************************/
const ScrollTop = () => {

  // 라우터 경로 변경시 path 값 읽어오기
  // pathname 객체 속성에 담긴다!
  const {pathname} = useLocation();

  // 화면랜더링 구역에 스크롤상단이동 코드넣기
  useEffect(()=>{
    // 스크롤 최상단 이동
    window.scrollTo(0,0);
    // 변경된 라우터 경로값 확인
    // console.log("라우터경로:",pathname);
  },[pathname]);
  // 의존성을 라우터 경로 변수로 설정한다!

  // 컴포넌트 리턴이 필요하나
  // 소스리턴이 아니므로 null를 쓴다
  return null;

}; /////////// ScrollTop 컴포넌트 ////////////

const root = ReactDOM.createRoot(document.querySelector("#root"));

// 출력하기
root.render(<MainComponent />);
