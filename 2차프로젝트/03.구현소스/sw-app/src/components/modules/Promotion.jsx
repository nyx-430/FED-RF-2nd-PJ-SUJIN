import React from "react";
import { Link } from "react-router-dom";

// 프로모션 데이터 불러오기
import { pmData } from "../data/promotion_data";

// 스와이프
import { SwiperApp } from "../../plugin/SwiperApp";

function Promotion() {
  return (
    <>
      <section id="Promotion-page" className="page">
        <div className="inbox">
          <h2 className="title">Promotion : The Summer, We Loved at 3PM</h2>
          {/* 스와이프 배너 */}
          {/* <div className="banner-box"> */}
          <div className="swiper">
            <SwiperApp />
          </div>
          {/* 상품 리스트 */}
          <div className="pbox ">
            <h1 className="title">Product</h1>
            <div className="col-12">
              <ul>
                {pmData.map((v, i) => (
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
                        <img src={v.src} alt={v.tit} />
                        <div className="overlay"></div>
                      </div>
                      <h2>{v.tit}</h2>
                      <h3>{v.price}</h3>
                    </Link>
                  </li>
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
