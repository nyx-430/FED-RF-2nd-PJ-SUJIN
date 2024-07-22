/// SW19 상품 페이지 - Shop.jsx ///
import React, { useEffect } from "react";

// Shop 페이지 공통 모듈
import TopBanner from "../modules/TopBanner";
import Products from "../modules/Products";

function Shop(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  
  // 코드 리턴 구역 /////////////
  return (
    <>
      {/* 상단 공통 배너 */}
      <TopBanner />

      {/* 상품 리스트 */}
      <Products />
    </>
  );
}

export default Shop;
