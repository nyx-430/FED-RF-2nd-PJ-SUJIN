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
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////

  // 코드 리턴 구역 //////////
  return (
    <section id="detail-page" className="page">
      <div className="inbox col-6">
        <div className="img-box">
          <img src={src} alt={tit} />
        </div>
        <div className="desc-box">
          <div className="heading-area">
            <h2 className="sub-title">{tit}</h2>
            <h3 className>{price}</h3>
          </div>
          <div className="text-area">
            {desc.split("^").map((v, i) => (
              <p key={i}>{v}</p>
            ))}
            <hr />
            <div className="small-text">
              <p>
                Note:
                {note.split("^").map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </p>
              <p>
                Perfumer:
                {perfumer.split("^").map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </p>
              <p>
                Ingredients:{" "}
                {ingredients.split("^").map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
