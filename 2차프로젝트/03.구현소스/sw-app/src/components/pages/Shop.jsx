import React, { useEffect } from "react";

// Shop 페이지 공통 컴포넌트 불러오기
import TopBanner from "../modules/TopBanner";
import Products from "../modules/Products";

function Shop(props) {
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  return (
    <>
      {/* 상단 공통 컴포넌트 */}
      <TopBanner />

      {/* 상품 리스트 영역 */}
      <Products />
    </>
  );
}

export default Shop;
