/// SW19 카트 리스트 - CartList.jsx ///
import React, { useContext } from "react";
import { pCon } from "./pCon";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../../css/cart_list.scss";

function CartList({ tit, src, price, quantity }) {
  // 컨텍스트
  const myCon = useContext(pCon);

  // 로컬스 데이터 가져오기
  // const selData = JSON.parse(myCon.locals);
  // console.log("로컬스 데이터:", selData);

  // 코드 리턴 구역 //////////////////
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
            <img src={process.env.PUBLIC_URL + "/images/shop/6am/p_6am.png"} alt="cart item" />
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
              <input type="text" id="sum" value={quantity} readOnly />
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
        {/* 상품 수량 증감 버튼 */}
        <div className="item-quantity">
          <div id="total-price" className="total-price">
            <strong className="price-title">
              총 상품금액
              <span className="qty">({quantity})</span>
            </strong>
            <strong className="total">
              <em>원</em>
            </strong>
          </div>
          {/* 장바구니 버튼 */}
          <div className="btn-box2">
            <button className="buy-btn">구매하기</button>
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
