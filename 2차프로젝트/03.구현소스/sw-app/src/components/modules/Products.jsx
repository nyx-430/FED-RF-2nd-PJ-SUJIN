import React, { useState } from "react";

// 제이쿼리
import $ from "jquery";

// 상품 데이터 불러오기
import { perfumeData } from "../data/perfume_data";
import { handData } from "../data/handcare_data";
import { bodyData } from "../data/bodycare_data";

function Products(props) {
  // 코드 리턴 구역 //////////
  return (
    <>
      <section id="product-page" className="page">
        <div className="inbox">
          <h1 className="big-title">All Products</h1>
        </div>
        <div className="pbox ">
          <div className="col-12">
            <ul>
              {/* 향수 */}
              {perfumeData.map((v, i) => (
                <li key={i}>
                  <div className="img-box">
                    <img src={v.src} alt={v.tit} />
                    <div className="overlay"></div>
                  </div>
                  <h2>{v.tit}</h2>
                  <h3>{v.price}</h3>
                </li>
              ))}
              {/* 핸드케어 */}
              {handData.map((v, i) => (
                <li key={i}>
                  <div className="img-box">
                    <img src={v.src} alt={v.tit} />
                    <div className="overlay"></div>
                  </div>
                  <h2>{v.tit}</h2>
                  <h3>{v.price}</h3>
                </li>
              ))}
              {/* 바디케어 */}
              {bodyData.map((v, i) => (
                <li key={i}>
                  <div className="img-box">
                    <img src={v.src} alt={v.tit} />
                    <div className="overlay"></div>
                  </div>
                  <h2>{v.tit}</h2>
                  <h3>{v.price}</h3>
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
