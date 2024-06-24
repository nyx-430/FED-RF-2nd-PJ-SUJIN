// 메인 페이지 컴포넌트

// 메인 페이지용 CSS
import "../../css/index.scss";

// 컴포넌트 불러오기
import StoryIntro from "../modules/StoryIntro";
import Collection from "../modules/Collection";
import Promotion from "../modules/Promotion";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* <!-- 1. 스토리 인트로 컴포넌트 --> */}
      <StoryIntro />

      {/* <!-- 2. 컬렉션 컴포넌트 --> */}
      <Collection catName="am6" />

      {/* <!-- 3. 프로모션 컴포넌트 --> */}
      <Promotion />
    </>
  );
} /////////// Main ///////////
