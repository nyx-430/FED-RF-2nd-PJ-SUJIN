import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// 상품 데이터 불러오기
import { perfumeData } from "../data/perfume_data";
import { handData } from "../data/handcare_data";
import { bodyData } from "../data/bodycare_data";
import { fullSet, hcSet, miniDuoSet, discovertSet } from "../data/set_data";

// CSS 불러오기
import "../../css/shop.scss";

function Products() {
  // 라우터 전달값 받기
  const { state } = useLocation();

  console.log("전달값:", state.category);

  // 데이터 합치기 : ...(스프레드 연산자)사용
  let selData = [
    ...perfumeData,
    ...handData,
    ...bodyData,
    ...fullSet,
    ...hcSet,
    ...miniDuoSet,
    ...discovertSet,
  ];

  // 데이터 처리대상 : 나중에 처리 대상 변경만 하면 끝!
  let rangeData = ["Perfume", "Body Care", "Hand Care"];

  // console.log(selData);
  console.log("데이터 대상인가?", rangeData.includes(state.category));

  // state전달값이 빈값이 아니면 배열 filter 돌리기
  // 배열.includes(특정값) -> 배열값 만큼 돌면서 검사후 있으면 true
  if (rangeData.includes(state.category)) {
    selData = selData.filter((v) => {
      if (v.category === state.category) return true;
    });
  }

  console.log(selData);

  // 코드 리턴 구역 //////////
  return (
    <>
      <section id="product-page" className="page">
        <div className="inbox">
          <h1 className="big-title">{state.category}</h1>
        </div>
        <div className="pbox ">
          <div className="col-12">
            <ul>
              {/* 향수 + 핸드케어 + 바디케어 */}
              {selData.map((v, i) => (
                <li key={i}>
                  <Link
                    to="/detail"
                    state={{
                      tit: v.tit,
                      src: v.src,
                      detail: v.detail,
                      price: v.price,
                      desc: v.desc,
                      note: v.note,
                      perfumer: v.perfumer,
                      ingredients: v.ingredients,
                    }}
                  >
                    <div className="img-box">
                      <img src={process.env.PUBLIC_URL + v.src} alt={v.tit} />
                      <div className="overlay"></div>
                    </div>
                    <h2>{v.tit}</h2>
                    <h3>{v.price}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            <button className="load-more-btn">더보기</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
