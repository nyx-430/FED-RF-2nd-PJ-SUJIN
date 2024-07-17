// 메인 페이지 컴포넌트
import React, { useEffect } from "react";

// 메인 페이지 CSS
import "../../css/index.scss";

// 모듈
import StoryIntro from "../modules/StoryIntro";
import Collection from "../modules/Collection";
import Promotion from "../modules/Promotion";

export default function Main() {
  // 랜더링 구역 ////////////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); ////////////////////////
  
  // 코드 리턴 구역 ////////////////////////
  return (
    <>
      {/* <!-- 1. 스토리 인트로 컴포넌트 --> */}
      <StoryIntro />

      {/* <!-- 3. 프로모션 컴포넌트 --> */}
      <Promotion />
      
      {/* <!-- 2. 컬렉션 컴포넌트 --> */}
      <Collection catName="am6" />

    </>
  );
} /////////// Main ///////////
