/// SW19 상품 상세 페이지 ///
// -> 상품 리스트로부터 라우팅 이동하여 보이는 페이지

import React, { useEffect } from "react";

// 라우터로 전달한 state값을 읽기 위한 객체
import { useLocation } from "react-router-dom";

// CSS 불러오기
import "../../css/shop.scss";

function Detail(props) {
  // 라우터 호출시 전달한 값을 받는다
  const loc = useLocation();
  const tit = loc.state.tit;
  const src = loc.state.src;
  const price = loc.state.price;
  const desc = loc.state.desc;
  const note = loc.state.note;
  const perfumer = loc.state.perfumer;
  const ingredients = loc.state.ingredients;

  // 화면 랜더링 실행 구역 //////////
  // 매번 실행해야 이미 생성된 컴포넌트의
  // 랜더링 실행 구역이 업데이트 시에도 작동한다!
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////

  // 코드 리턴 구역 //////////
  return (
    <section id="detail-page" className="page">
      <div className="inbox">
        <div className="pbox">
          <div className="img-box">
            <img src={src} alt={tit} />
          </div>
          <div className="desc-box">
            <h2>{tit}</h2>
            <h3>{price}</h3>
            <p>{desc}</p>
            <p>{note}</p>
            <p>{perfumer}</p>
            <p>{ingredients}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
