import React, { useEffect } from "react";

// 컴포넌트 불러오기
import StoryIntro from "../modules/StoryIntro";

function MembersShip(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  return (
    <>
      <StoryIntro />
    </>
  );
}

export default MembersShip;
