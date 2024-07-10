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

// 카트 리스트 모듈
import CartList from "../modules/CartList";

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
              <a href="/cart"
              className="menu-buttom"
              onClick={(e)=>{
                e.preventDefault();
                $(".shopping-tab").show();
              }}
              >
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
        {/* 사이드 메뉴 - 쇼핑탭 */}
        <aside 
        className="shopping-tab"
        style={{display: "none"}}
        >
          <CartList />
        </aside>
      </header>
    </>
  );
} /////////// TopArea ///////////
