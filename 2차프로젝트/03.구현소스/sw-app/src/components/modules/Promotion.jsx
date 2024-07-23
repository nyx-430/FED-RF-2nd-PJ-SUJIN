/// SW19 프로모션 - Promotion.jsx ///
import React from "react";
import { Link } from "react-router-dom";

// 프로모션 데이터
import { pmData } from "../data/promotion_data";

// 스와이프
import { SwiperApp } from "../../plugin/SwiperApp";

// CSS
import "../../css/promotion.scss";

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
                      notice: v.notice,
                    }}
                    >
                      <div 
                      className="img-box"
                      onMouseOver={(e)=>{
                        e.currentTarget.querySelector('img').src=process.env.PUBLIC_URL + v.hoverSrc
                      }}
                      onMouseLeave={(e)=>{
                        e.currentTarget.querySelector('img').src=process.env.PUBLIC_URL + v.src
                      }}
                      >
                        <img src={process.env.PUBLIC_URL+v.src} alt={v.tit} />
                        {/* <div className="overlay"></div> */}
                      </div>
                      <h2>{v.tit}</h2>
                      <h3>{v.price}원</h3>
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
