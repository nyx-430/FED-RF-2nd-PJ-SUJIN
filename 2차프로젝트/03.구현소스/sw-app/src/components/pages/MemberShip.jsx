/// SW19 멤버쉽 페이지 - MemberShip.jsx ///
import React, { useEffect } from "react";

// 모듈
import StoryIntro from "../modules/StoryIntro";
import Collection from "../modules/Collection";

function MemberShip(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  // 코드 리턴 구역 /////////////////
  return (
  <>
      {/* <!-- 스토리 인트로 --> */}
      <StoryIntro />

      {/* <!-- 컬렉션 --> */}
      <Collection catName="am6" />
  </>
  );
}

export default MemberShip;
