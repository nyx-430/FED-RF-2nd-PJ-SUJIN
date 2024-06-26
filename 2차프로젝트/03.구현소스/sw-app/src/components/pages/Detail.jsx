/// SW19 상품 상세 페이지 ///
// -> 상품 리스트로부터 라우팅 이동하여 보이는 페이지

import React, { useEffect } from "react";

// 라우터로 전달한 state값을 읽기 위한 객체
import { useLocation } from "react-router-dom";

// 상품 데이터 불러오기
import { perfumeData } from "../data/perfume_data";
import { handData } from "../data/handcare_data";
import { bodyData } from "../data/bodycare_data";

// CSS 불러오기
import "../../css/shop.scss";

function Detail(props) {
  // 라우터 호출시 전달한 값을 받는다
  const loc = useLocation();
  const ptit = loc.state.tit;
  const pdesc = loc.state.desc;
  const top = loc.state.top;
  const heart = loc.state.heart;
  const base = loc.state.base;
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
          <h1 className="big-title">상세 페이지</h1>
        </div>
      </div>
    </section>
  );
}

export default Detail;
