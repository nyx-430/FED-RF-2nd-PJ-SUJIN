/// SW19 스토리 페이지 - Story.jsx ///
import React, { useEffect } from "react";

// 모듈
import StoryIntro from "../modules/StoryIntro";
import Collection from "../modules/Collection";

function Story(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  return (
    <>
      {/* <!-- 스토리 인트로 --> */}
      <StoryIntro />

      {/* <!-- 컬렉션 --> */}
      <Collection catName="am6" />
    </>
  );
}

export default Story;
