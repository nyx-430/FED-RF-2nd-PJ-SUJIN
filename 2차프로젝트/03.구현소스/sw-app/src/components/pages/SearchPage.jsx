/// SW19 검색 결과 페이지 - SearchPage.jsx ///
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 검색 모듈
import Searching from "../modules/Searching";

function SearchPage() {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////

  // 라우터 전달값 받기 객체 생성
  const loc = useLocation();

  // 넘어온 키워드 받기
  let keyword = loc.state.keyword;

  // console.log("검색어:", keyword);

  // 코드 리턴 구역 ///////////////
  return (
    <>
      <section id="search-page" className="page">
        <h1 className="big-title">Search Result</h1>
        <hr />
        <Searching kword={keyword} />
      </section>
    </>
  );
}

export default SearchPage;
