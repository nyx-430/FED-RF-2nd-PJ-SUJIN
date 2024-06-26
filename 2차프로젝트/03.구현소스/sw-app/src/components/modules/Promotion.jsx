import React from "react";
import { Link } from "react-router-dom";

// 프로모션 데이터 불러오기
import { pmData } from "../data/promotion_data";
import { SwiperApp } from "../../plugin/SwiperApp";

function Promotion(props) {
  return (
    <>
      <section id="Promotion-page" className="page">
        <div className="inbox">
          <h2 className="title">Promotion : The Summer, We Loved at 3PM</h2>
          {/* 스와이프 배너 */}
          {/* <div className="banner-box"> */}
          <div className="swiper">
            <SwiperApp />
            {/* <img
              src="./images/promotion/MAIN_SLIDE_PC_SUMMER.jpg"
              alt="promotion"
            /> */}
          </div>
          {/* 상품 리스트 */}
          <div className="pbox ">
            <h1 className="title">Product</h1>
            <div className="col-12">
              <ul>
                {pmData.map((v, i) => (
                  <Link to="/detail">
                    <li key={i}>
                      <div className="img-box">
                        <img src={v.src} alt={v.tit} />
                        <div className="overlay"></div>
                      </div>
                      <h2>{v.tit}</h2>
                      <h3>{v.price}</h3>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Promotion;
