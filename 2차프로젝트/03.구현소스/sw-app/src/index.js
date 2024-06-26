import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 컴포넌트 불러오기
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Story from "./components/pages/Story";
import Shop from "./components/pages/Shop";
import MembersShip from "./components/pages/MembersShip";
import Board from "./components/pages/Board";
import Detail from "./components/pages/Detail";

// 전체 공통 CSS 불러오기
import "../src/css/index.scss";

export default function MainComponent() {
  // 샵리스트
  const shopList = ["", "promotion", "perfume", "bodycare", "handcare"];

  return (
    // 라우터 루트로 라우터 구성 시작
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정!
        루트 Route 는 홀로 닫지 말고 반드시 다른
        하위 라우트를 감싸도록 한다!!! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
        -> path 설정 대신 index 키워드를 쓰면 
        첫 페이지로 구성됨 -> MainArea 컴포넌트 <Outlet/>에 출력된다!*/}
          <Route index element={<Main />} />
          <Route path="/story" element={<Story />} />
          {shopList.map((v,i) => (
            <Route key={i} path={`/shop/${v}`} element={<Shop />} />
          ))}
          <Route path="/membersship" element={<MembersShip />} />
          <Route path="/board" element={<Board />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
        {/* Layout 루트 Route로 하위 Route를 감싼다! */}
      </Routes>
    </BrowserRouter>
  );
}

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));

// 출력하기
root.render(<MainComponent />);
