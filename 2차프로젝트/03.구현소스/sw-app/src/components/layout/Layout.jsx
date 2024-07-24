/// SW19 전체 레이아웃 - Layout.jsx ///
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 컨텍스트 API
import { dCon } from "../modules/dCon";

// 제이쿼리
import $ from "jquery";
import "jquery.cookie";

// 컴포넌트
import { TopArea } from "./TopArea";
import MainArea from "./MainArea";
import FooterArea from "./FooterArea";
// 카트 리스트 모듈
import CartList from "../modules/CartList";

export default function Layout() {
  // [ 로그인 상태관리변수 ]
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));

  // [ 로그인 환영 메시지 상태관리변수 ]
  const [loginMsg, setLoginMsg] = useState(null);

  // 로컬스 카트 존재여부변수
  let cartTemp = false;

  // [ 로컬스 카트 데이터 상태변수 ]
  const [localsCart, setLocalsCart] = useState(
    localStorage.getItem("cart-data")
  );

  if (localsCart) {
    let cartCnt = JSON.parse(localsCart).length;
    if (cartCnt > 0) cartTemp = true;
  } /// 카트 존재여부 if ///

  // [ 카트 리스트 사용 여부 상태관리변수 : true일 때 사용 ]
  const [cartSts, setCartSts] = useState(cartTemp);

  ///////////////////////////////////////////////
  ////////////////// [ 함수 ] //////////////////
  // 라우팅 이동 함수
  const goNav = useNavigate();
  const goPage = useCallback((pm1, pm2) => {
    goNav(pm1, pm2);
  }, []);

  // 로그인 환영 메시지 생성 함수
  const makeMsg = useCallback((name) => {
    // 유저 아이콘
    let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];

    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 5);

    // 로그인 메시지 상태변수 업데이트
    setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);

    // 메시지 생성시 게시판 조회데이터 세션스 삭제(초기화)
    // sessionStorage.removeItem("bd-rec");
  }, []); ////// makeMsg //////

  // 로그아웃 함수
  const logoutFn = useCallback(() => {
    // 1. 로그인 상태값 null
    setLoginSts(null);

    // 2. 세션스 지우기 : minfo
    sessionStorage.removeItem("minfo");

    // 추가 삭제 : 게시판 조회 데이터 세션스
    // sessionStorage.removeItem("bd-rec");

    // 3. 로그인 메시지 초기화
    setLoginMsg(null);

    // 4. 메인 페이지로 돌아가기
    goPage("/");
  }, []); ////// logoutFn //////
  ///////////////////////////////////////////////

  // 랜더링 구역 ////////////////////////
  useEffect(() => {
    // -> 로그인 상태 체크
    // 만약 세션스(minfo)의 값이 null이 아니면 로그인 상태변수를 업데이트 한다!
    // -> null이 아니면 조건문이 true처리됨!
    if (sessionStorage.getItem("minfo")) {
      // 세션스 변수할당
      let ss = sessionStorage.getItem("minfo");

      // 로그인 상태값
      setLoginSts(ss);

      // 로그인 메시지 업데이트 :
      // -> 세션스의 unm(이름값)을 보내준다!
      makeMsg(JSON.parse(ss).unm);
    } /// if ///

    $.cookie("aa", "bb", { expires: 2 });

    $("html,body").animate({scrollTop: "0px"},500);
  }, []); ////////////////////////


  // 쇼핑탭 버튼 클래스 on 함수
  const showTab = () => {
    console.log("나 쇼탭이야~!");
    document.querySelector(".cart").classList.toggle("on");
    let tg = document.querySelector(".shopping-tab");
    if(tg) tg.classList.toggle("on");
    else alert("장바구니가 비었습니다~!");

  } ////// showTab //////

  // 코드 리턴 구역 /////////////////
  return (
    // Provider value속성으로 전역노출 변수를 설정함!
    <dCon.Provider
      value={{
        loginSts,
        setLoginSts,
        loginMsg,
        setLoginMsg,
        goPage,
        makeMsg,
        logoutFn,
        localsCart,
        setLocalsCart,
        cartSts,
        setCartSts,
      }}
    >
      {/* 1.상단영역 */}
      <TopArea
        loginMsg={loginMsg}
        loginSts={loginSts}
        logoutFn={logoutFn}
        goPage={goPage}
        showTab={showTab}
      />
      {/* 2.메인영역 */}
      <MainArea />
      {/* 3.하단영역 */}
      <FooterArea />
      {/* 카트 리스트 : 카트 상태값 true 출력 */}
      {cartSts && (
        <aside className="shopping-tab scbar">
          <CartList />
        </aside>
      )}
    </dCon.Provider>
  );
} /////////// Layout ///////////
