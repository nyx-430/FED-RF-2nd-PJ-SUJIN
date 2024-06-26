/// Shop 페이지 상단 공통 배너 컴포넌트 - TopBanner ///

import React from "react";

import { shopBan } from "../data/banner_data";


// 상단 배너 CSS 불러오기
import "../../css/shop.scss";

function TopBanner(props) {
  return (
    <section id="top-banner">
      <div className="cont-box">
        <img src="./images/shop/banner/top_slide_pc_1.jpg" alt="ban" />
      </div>
    </section>
  );
}

export default TopBanner;
