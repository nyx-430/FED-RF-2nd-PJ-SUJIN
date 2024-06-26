// 스토리 페이지 컴포넌트
import React, { useEffect } from "react";

// 컴포넌트 불러오기
import StoryIntro from "../modules/StoryIntro";
import Collection from "../modules/Collection";

function Story(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  return (
    <>
      {/* <!-- 스토리 인트로 컴포넌트 --> */}
      <StoryIntro />

      {/* 컬렉션 컴포넌트 */}
      {/* <Collection /> */}
    </>
  );
}

export default Story;
