/// SW19 상품 상세 페이지 - Detail.jsx ///
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../../css/shop.scss";

function Detail() {
  const loc = useLocation();
  // console.log(loc.state);
  const tit = loc.state.tit ? loc.state.tit : "";
  const src = loc.state.src ? loc.state.src : "";
  const detail = loc.state.detail ? loc.state.detail : "";
  const price = loc.state.price ? loc.state.price : "";
  const desc = loc.state.desc ? loc.state.desc : "";
  const note = loc.state.note ? loc.state.note : "";
  const perfumer = loc.state.perfumer ? loc.state.perfumer : "";
  const ingredients = loc.state.ingredients ? loc.state.ingredients : "";
  const notice = loc.state.notice ? loc.state.notice : "";

  // 랜더링 실행 구역 ////////////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////

  // 뒤로 가기 버튼 함수
  function goBack() {
    window.history.back();
  } /// goBack ///

  // 코드 리턴 구역 ////////////////////////
  return (
    <>
      <section id="detail-page" className="page">
        {/* 뒤로 가기 버튼 */}
        <div className="btn-box" onClick={goBack}>
          <button className="back-btn">＜</button>
          <span>Back</span>
        </div>
        {/* 상품 이미지 */}
        <div className="inbox col-6">
          <div className="img-box">
            <img src={process.env.PUBLIC_URL + src} alt={tit} />
          </div>
          <div className="desc-box">
            <div className="heading-area">
              <h2 className="sub-title">{tit}</h2>
              <h3 className>{price}</h3>
            </div>
            {/* 상품 설명 */}
            <div className="text-area">
              {desc.split("^").map((v, i) => (
                <p key={i}>{v}</p>
              ))}
              <div className="small-text">
                <aside>
                  Note:
                  {note.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
                <aside>
                  Perfumer:
                  {perfumer.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
                <aside>
                  Ingredients:{" "}
                  {ingredients.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
              </div>
              <div className="notice-text">
                <aside>
                  {notice.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
              </div>
            </div>
            {/* 상품 수량 - 증감 버튼 */}
            <div className="item-quantity">
              <div className="btn-box1">
                <button className="increase">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input type="number" value={1} />
                <button className="decrease">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
              {/* 장바구니 버튼 */}
              <div className="btn-box2">
                <button className="buy-btn">구매하기</button>
                <button className="cart-btn">장바구니</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* 상세 페이지 */}
        <div className="detail-box col-12">
          <div className="img-box">
            <img src={process.env.PUBLIC_URL + detail} alt={tit} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
