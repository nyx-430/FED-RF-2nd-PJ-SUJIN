import React, { useState } from "react";

import { pmData } from "../data/promotion_data";

function Promotion(props) {
  return (
    <section id="Promotion-page" className="page">
      <div className="inbox">
        <h2 className="title">Promotion : The Summer, We Loved at 3PM</h2>
        {/* 슬라이드 배너 */}
        {/* <Banner /> */}
        <div className="banner-box">
          <img
            src="./images/promotion/MAIN_SLIDE_PC_SUMMER.jpg"
            alt="promotion"
          />
        </div>
        {/* 상품 리스트 */}
        <div className="pbox ">
          <h1 className="title">Product</h1>
          <div className="col-12">
            <ul>
              {pmData.map((v, i) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
