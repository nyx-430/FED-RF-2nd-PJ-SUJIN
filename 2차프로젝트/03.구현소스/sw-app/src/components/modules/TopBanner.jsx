/// SW19 Shop 페이지 상단 공통 배너 컴포넌트 - TopBanner.jsx ///
import React from "react";

// 배너 데이터
import { shopBan } from "../data/banner_data";


// 상품/상세/배너 CSS
import "../../css/shop.scss";

function TopBanner() {
  return (
    <section id="top-banner">
      <div className="cont-box">
        <img src="/images/shop/banner/Wimbledon Park.jpg" alt="ban" />
      </div>
    </section>
  );
}

export default TopBanner;
