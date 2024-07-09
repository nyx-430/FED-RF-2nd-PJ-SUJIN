/// 상단 영역 컴포넌트 ///
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 제이쿼리
import $ from "jquery";

// GNB 데이터 불러오기
import { menu } from "../data/gnb";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faBa } from "@fortawesome/free-regular-svg-icons";
// import { faCamera } from "@fortawesome/free-brands-svg-icons";

// CSS 불러오기
import "../../css/top_area.scss";

export default function TopArea() {
  // 이동 함수 /////////////
  const goNav = useNavigate();

  // 클래스 on 함수 /////////////
  const addOn = () => {
    document.querySelector(".menu-button").classList.toggle("on");
    document.querySelector(".menu-open").classList.toggle("on");
  }; ////// addOn //////

  const location = useLocation();

  useEffect(() => {
    document.querySelector(".menu-button").classList.remove("on");
    document.querySelector(".menu-open").classList.remove("on");
  }, [location]);

  // 검색 관련 함수들 /////////////
  // 검색창에 엔터키 누르면 검색 함수 호출
  const enterKey = (e) => {
    // console.log(e.key,e.keyCode);
    // e.keyCode는 숫자, e.key문자로 리턴함

    if (e.key == "Enter") {
      // 입력창의 입력값 읽어오기 : val() 사용
      let txt = $(e.target).val().trim();
      console.log(txt);

      // 빈 값이 아니면 검색 함수 호출 (검색어 전달!)
      if (txt != "") {
        // 입력창 비우고 부모박스 닫기
        $(e.target).val("").parent().hide();

        // 검색 보내기
        goSearch(txt);
      } /// if ///
    } /// if ///
  }; ///////// showSearch 함수 /////////

  // 3. 검색 페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("검색 시작!");

    // 라우터 이동 함수로 이동하기
    // 네비게이트 메서드("라우터 주소",{state:{보낼 객체}})
    goNav("/search", { state: { keyword: txt } });
  }; ///////// goSearch 함수 /////////

  // 코드 리턴 구역 //////////////
  return (
    <>
      <header id="gnb">
        <div className="menu">
          <div className="lines">
            <a href="/">
              <span id="logo" className="line">
                SW19
              </span>
            </a>
            <p className="line">
              A transitional scent of the green forest | of Wimbledon, London{" "}
              <br />
              SW19 | that changes over time
            </p>
          </div>
          {/* 메뉴 아이콘 박스 */}
          <div className="menu-box">
            {/* <!-- 햄버거 버튼 --> */}
            <div className="menu-button" onClick={addOn}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <!-- 하단 아이콘 박스 --> */}
            <div className="icon-box">
              <a href="/login" className="menu-buttom">
                <FontAwesomeIcon icon={faRightToBracket} />
              </a>
              <a href="/join" className="menu-buttom">
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a href="/cart" className="menu-buttom">
                <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </div>
          </div>
        </div>
        {/* 사이드 메뉴 - 카테고리 */}
        <aside className="menu-open">
          {/* 검색 입력 박스 */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              name="schinGnb"
              id="schinGnb"
              onKeyUp={enterKey}
            />
            <button className="schbtn">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="schbtnGnb"
                title="Open search"
                onClick={(e) => {
                  // 검색어 읽기
                  let stxt = e.currentTarget.nextElementSibling.value;
                  if (stxt.trim() != "") {
                    // 검색하기
                    goSearch(stxt);
                  } /// if ///
                  else {
                    // 검색어 비었을 때 메시지
                    alert("Please enter a search term!");
                  }
                }}
              />
            </button>
          </div>
          <ul>
            {menu.map((v, i) => (
              <li key={i}>
                {v.sub ? v.txt : <Link to={v.link}>{v.txt}</Link>}
                {v.sub && (
                  <div className="smenu">
                    <ol>
                      {v.sub.map((v, i) => (
                        <li key={i}>
                          <Link to={v.link} state={{ category: v.txt }}>
                            - {v.txt}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
        {/* 사이드 메뉴 - 장바구니 */}
        <aside className="shopping-tab on">
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
                  <buttom className="">
                    <span></span>
                  </buttom>
                  <input type="text" />
                  <buttom className="">
                    <span></span>
                  </buttom>
                </div>
              </td>
            </tr>
          </tbody>
        </aside>

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
      </header>
    </>
  );
} /////////// TopArea ///////////
