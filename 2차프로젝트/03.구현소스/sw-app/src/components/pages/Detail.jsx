/// SW19 상품 상세 페이지 - Detail.jsx ///
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dCon } from "../modules/dCon";

// 제이쿼리
import $ from "jquery";

// 콤마 추가 함수
import { addComma } from "../func/common_fn";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../../css/shop.scss";

function Detail() {
  // 컨텍스트
  const myCon = useContext(dCon);

  const loc = useLocation();
  const tit = loc.state.tit ? loc.state.tit : "";
  const src = loc.state.src ? loc.state.src : "";
  const detail = loc.state.detail ? loc.state.detail : "";
  const price = loc.state.price ? loc.state.price : "";
  const desc = loc.state.desc ? loc.state.desc : "";
  const note = loc.state.note ? loc.state.note : "";
  const perfumer = loc.state.perfumer ? loc.state.perfumer : "";
  const ingredients = loc.state.ingredients ? loc.state.ingredients : "";
  const notice = loc.state.notice ? loc.state.notice : "";

  // 수량, 총합계 상태관리변수
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(price));

  // 랜더링 실행 구역 ////////////////////////
  useEffect(() => {
    // 로딩시 상단 이동
    window.scrollTo(0, 0);
  }, []); ////////////////////////

  useEffect(() => {
    // 수량, 총합계 반영
    setTotalPrice(parseFloat(price) * quantity);
  }, [price, quantity]); ////////////////////////

  ///////////////////////////////////////////////
  ////////////////// [ 함수 ] //////////////////
  // 수량 증가 함수
  const plusFn = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }; ////// plusFn //////
  // 수량 감소 함수
  const minusFn = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }; ////// minusFn //////

  // 뒤로가기 버튼 함수
  const goBack = () => {
    window.history.back();
  }; ////// goBack //////
  ///////////////////////////////////////////////

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
              <h3 className>{addComma(price)}원</h3>
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
            {/* 상품 수량 증감 버튼 */}
            <div className="item-quantity">
              <div className="btn-box1">
                <button className="increase" onClick={plusFn}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input type="text" id="sum" value={quantity} readOnly />
                <button className="decrease" onClick={minusFn}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
              <div id="total-price" className="total-price">
                <strong className="price-title">
                  총 상품금액
                  <span className="qty">({quantity})</span>
                </strong>
                <strong className="total">
                  <em>{totalPrice.toLocaleString()}원</em>
                </strong>
              </div>
              {/* 장바구니 버튼 */}
              <div className="btn-box2">
                <button className="buy-btn">구매하기</button>
                <button
                  className="cart-btn"
                  onClick={() => {
                    // 1. 로컬스 카트 데이터 넣기
                    if (!localStorage.getItem("cart-data")) {
                      localStorage.setItem("cart-data", "[]");
                    } /// if ///

                    // 2. 로컬스 읽어와서 파싱하기
                    let locals = localStorage.getItem("cart-data");
                    locals = JSON.parse(locals);

                    // idx값만 모아서 다른 배열 만들기
                    let newLocals = locals.map((v) => v.tit);
                    console.log("idx 새배열:", newLocals);

                    // 인클루드 비교
                    let retSts = newLocals.includes(tit);

                    console.log("중복 상태:", retSts);

                    if (retSts) {
                      alert("이미 선택된 상품입니다.");
                      return;
                    } /// if ///

                    // 4.로컬스에 객체 데이터 추가하기
                    locals.push({
                      tit: tit,
                      src: src,
                      price: price,
                      quantity: $("#sum").val(),
                    });

                    // 로컬스에 문자화하여 입력
                    localStorage.setItem("cart-data", JSON.stringify(locals));

                    // 로컬스 카트 데이터 상태값 변경
                    localStorage.getItem("cart-data");

                    // 카트리스트 생성 상태값 변경
                    myCon.setCartSts(true);

                    alert("장바구니에 상품이 추가되었습니다.");
                  }} ////// onClick //////
                >
                  장바구니
                </button>
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
