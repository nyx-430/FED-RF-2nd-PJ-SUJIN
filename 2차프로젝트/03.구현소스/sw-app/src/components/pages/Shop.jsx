import React from 'react';

// Shop 페이지 공통 컴포넌트 불러오기
import TopBanner from '../modules/TopBanner';
import Products from '../modules/Products';

// 컴포넌트 불러오기


function Shop(props) {
    return (
        <>
            {/* 상단 공통 컴포넌트 */}
            <TopBanner />

            {/* 상품 영역 */}
            <Products />
        </>
    );
}

export default Shop;