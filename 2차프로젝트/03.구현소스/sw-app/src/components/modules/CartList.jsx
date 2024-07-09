import React, { useContext } from "react";
import { pCon } from "./pCon";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// CSS 불러오기
import "../../css/cart_list.scss";

function CartList(props) {
  // 컨텍스트
  const myCon = useContext(pCon);

  return (
    <>
        <div className="tab-title">
          <h1>CART</h1>
        </div>
        <hr />
        {/* 장바구니 리스트 */}
        <tbody className="cart-list">
          <tr>
            {/* 상품 이미지 */}
            <td className="cart-item-media">
              <img src="/images/shop/6am/p_6am.png" alt="item" />
            </td>
            {/* 상품 이름 */}
            <td className="cart-item-name">Item Name</td>
            {/* 상품 가격 */}
            <td className="cart-item-price">원</td>
            {/* 상품 수량 - 증감 버튼 */}
            <td className="cart-item-quantity">
              <div className="btn-box">
                <button className="increase">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <input type="number" value={1} />
                <button className="decrease">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        <hr />
        {/* 총합 계산 + 구매 버튼 */}
        <div className="cart-footer">
          <div className="total-box">
            <div className="total-price">
              <p>Total</p>
              <p>원</p>
            </div>
            <div className="btn-box">
              <button className="buy">구매하기</button>
            </div>
          </div>
        </div>

      {/* 사이드 메뉴 - 장바구니(로그인x) */}
      {/* <aside className="shopping-tab">
          <div className="no-login">
            <div className="text-box">
              <h3>장바구니가 비었습니다.</h3>
              <Link to="/shop" className="go-shop">
                <button>CONTINUE SHOPPING</button>
              </Link>
              <h3>혹시 SW19 회원이신가요?</h3>
              <div>
                <span>로그인</span>하고 편하게 쇼핑하세요!
              </div>
            </div>
          </div>
        </aside> */}
    </>
  );
}

export default CartList;
