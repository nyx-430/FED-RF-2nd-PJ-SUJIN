/// 스토리 인트로 컴포넌트 ///

import React, { useEffect, useState } from "react";

// 제이쿼리
import $ from "jquery";

// 스토리 인트로 CSS
import "../../css/storyintro.scss";

function StoryIntro() {
  // 클래스 visible 상태관리변수
  const [visible, setVisible] = useState(false);

   // 랜더링 구역 ////////////////////////
  useEffect(() => {
      // 클래스 visible
      setVisible(true);

    const scAct = $(".scAct");
    const CRITERIA = (window.innerHeight / 3) * 2;

    $(window).on("scroll", () => {
      scAct.each((idx, ele) => {
        let pos = ele.getBoundingClientRect().top;
        if(pos<CRITERIA) $(ele).addClass("on");
      });
    });
  }, []); ///////////// useEffect /////////////

  // 코드 리턴 구역 //////////////
  return (
    <>
      <section id="intro-page">
        <div className={`inbox ${visible ? "visible" : ""}`}>
          <div className="item-box">
            <img className="intro-logo" src={process.env.PUBLIC_URL + "/images/logo_w.png"} alt="logo" />
            <h1 className="main-title">
              A transitional scent of the green forest of
              <br />
              Wimbledon, London SW19
            </h1>
            <h1 className="main-title">
              시간에 따라 변화하는 런던 윔블던 숲과 공원의 향
            </h1>
            <h1 className="main-title">
              The Beginning Of The Story Wimbledon Forest
            </h1>
            <p className="main-text1 scAct">
              Our fragrance brand took its name after the Wimbledon district
              postal code “SW19". Wimbledon is a charming, peaceful town
              surrounded by green forests and parks in the southwest part of
              London. As strolling through Wimbledon Park, we encounter people
              playing football on fresh grass in the early morning, children
              giggling and playing under the warm sun, starlight twinkling as
              lovers whisper in the dark. Our scents 6am, noon, 3pm, 9pm &
              midnight, portrays Wimbledon's transitional scents change over
              time.
            </p>
            <p className="main-text2 scAct">
              ‘SW19’은 윔블던 지역의 우편 주소로, 영국 런던의 남서쪽에 위치한
              푸른 숲과 공원으로 둘러싸여진 평화롭고 아름다운 도시입니다. 윔블던
              파크를 걷다 보면, 이른 아침 저 멀리 잔디 위에서 축구공을 차는
              사람들의 숨소리, 따뜻한 햇살 아래 해맑게 뛰노는 꼬마들의 웃음소리,
              그리고 반짝이는 별빛 아래 사랑을 속삭이는 연인들의 목소리를 만나게
              됩니다. 이처럼 시간에 따라 변화하는 윔블던의 초록빛 싱그러움을
              6am, Noon, 3pm, 9pm, Midnight 5가지 시간에 향수로 담았습니다.
              하루의 시간, 일상 속 행복의 순간으로부터 시작된 SW19의 향을 통해
              당신의 가장 빛나고 따뜻한 ‘순간’으로 떠나보세요.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default StoryIntro;
