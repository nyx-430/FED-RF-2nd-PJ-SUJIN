/// SW19 상품 페이지 ///

import React, { useEffect, useRef, useState } from "react";
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

  // 상품 상태관리변수
  const [product, setProduct] = useState([]);

  // 상품 더보기 참조변수 : 개수 더하기 배수곱할수 증가
  const vCnt = useRef(1);

  // 랜더링 구역 ////////////////////////
  useEffect(() => {
    console.log("로케이션새로로딩");
    // 상품 개수 더하기 초기화
    vCnt.current = 1;

    // 데이터 상태값 변경
    setProduct(selData.slice(0,8*vCnt.current));
    // 더보기 버튼
    // loadMore();
  },[state]); ////////////////////////

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
  let rangeData = ["Perfume", "Body Care", "Hand Care", "Gift Set"];
  console.log("데이터 대상인가?", rangeData.includes(state.category));

  // state전달값이 빈값이 아니면 배열 filter 돌리기
  // 배열.includes(특정값) -> 배열값 만큼 돌면서 검사후 있으면 true
  if (rangeData.includes(state.category)) {
    selData = selData.filter((v) => {
      if (v.category === state.category) return true;
    });
  }

  console.log(selData.length);

  console.log(product.length);

  // 더보기 버튼 기능 ////////////////////////
  const loadMore = () => {
    // 곱할수 1씩 증가
    vCnt.current++;
    // 보여줄 상품 변경하기 : 곱할 수 만큼 더 보여주기
    setProduct(selData.slice(0,8*vCnt.current));
  }; ////////// loadMore //////////

  // 코드 리턴 구역 ////////////////////////
  return (
    <>
      <section id="product-page" className="page">
        <div className="inbox">
          <h1 className="big-title">{state.category}</h1>
        </div>
        <div className="pbox ">
          <div className="col-12">
            <ul>
              {/* 상품 리스트 */}
              {product.map((v, i) => (
                <li key={i}>
                  <Link
                    to="/detail"
                    state={v}
                  >
                    <div 
                    className="img-box"
                    onMouseOver={(e)=>{
                      // console.log("마우스오버");
                      e.currentTarget.querySelector('img').src=process.env.PUBLIC_URL + v.hoverSrc
                    }}
                    onMouseLeave={(e)=>{
                      // console.log("마우스리브");
                      e.currentTarget.querySelector('img').src=process.env.PUBLIC_URL + v.src
                    }}
                    >
                      <img src={process.env.PUBLIC_URL + v.src} alt={v.tit} />
                      {/* <div className="overlay"></div> */}
                    </div>
                    <h2>{v.tit}</h2>
                    <h3>{v.price}</h3>
                  </Link>
                </li>
              ))}
            </ul>
            {selData.length > product.length && (
              <button className="load-more-btn" onClick={loadMore}>
                더보기
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
