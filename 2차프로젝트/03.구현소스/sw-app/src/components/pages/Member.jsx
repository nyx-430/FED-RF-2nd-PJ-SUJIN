/// 회원가입 페이지 컴포넌트 - Member.jsx ///
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 로컬스토리지 생성 JS
import { initData } from "../func/mem_fn";

// 제이쿼리
import $ from "jquery";

// 로그인/회원가입 CSS
import "../../css/member.scss";

// 다음 주소 모듈
import AddressInput from "../modules/AddressInput";

function Member() {
  // 라우터 이동 네비게이트
  const goNav = useNavigate();
  // goNav(라이터주소,state변수)

  // [ 회원가입 페이지 요구사항 ]
  // 1. 각 입력항목별로 유효성 검사를 실행함
  // 2. 상태체크를 통하여 적절한 유효성 검사시
  // 유효성 체크를 에러 메시지를 출력한다.
  // 3. 유효성 검사 통과시 로컬스에 저장한다.
  // -> 특이사항 :
  // 글자를 입력할 때마다 검사
  // + submit버튼 작동시 검사

  // [ 상태관리변수 ] /////////////
  // [1] 입력요소상태변수
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호 변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호 확인 변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자 이름 변수
  const [userName, setUserName] = useState("");
  // 5. 이메일 변수
  const [email, setEmail] = useState("");
  // 6. 주소 변수
  const [addr, setAddr] = useState("");
  // 7. 우편번호 변수
  const [zipcode, setZipcode] = useState("");

  // [2] 에러상태관리변수
  // -> 에러 상태값 초기값은 에러 아님(false)
  // 1. 아이디 변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호 변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호 확인 변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자 이름 변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일 변수
  const [emailError, setEmailError] = useState(false);
  // 6. 주소 변수
  const [addrError, setAddrError] = useState("");

  // console.log(">>>>", userIdError);

  // [ 아이디 관련 메시지 프리셋 ] ////
  const msgId = [
    // 1. 최소 5글자 이상 입력할 것
    "최소 5글자 이상 입력해 주세요.",
    // 2. 이미 사용중인 아이디임
    "이미 사용중인 아이디입니다.",
    // 3. 훌륭한 아이디!
    "사용 가능한 아이디입니다.",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "영문 대소문자/숫자/특수문자 중 2가지 이상을 조합한 5자~15자 비밀번호를 입력해 주세요.",
    // 비밀번호 확인
    confPwd: "비밀번호가 일치하지 않습니다.",
    // 필수입력
    // req: "필수입력 사항입니다.",
    // 이메일
    email: "이메일을 입력해 주세요.",
  }; ///// msgEtc ///////

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);

  // [ 유효성 검사 함수 ] ///////
  // 1. 아이디 유효성 검사 ////////////
  const changeUserId = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 아이디 유효성 검사식(따옴표로 싸지 말 것!)
    const valid = /^[A-Za-z0-9+]{5,}$/;
    // 유효성 검사 방법: 정규식.test(값)

    // 2. 입력 값 확인 : e.target
    // console.log(val);

    // 3. 에러 상태 분기하기
    // 3-1. 에러 아닐 때 (유효성 검사만 통과한 경우)
    if (valid.test(val)) {
      // console.log("통과했지만...!");
      // 아이디 검사를 위해 기본 데이터 생성 호출
      initData();
      // 로컬스토리지에 "mem-data"가 없으면 초기 셋팅

      // 이제 중복 아이디 검사 실행
      // 1. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");
      console.log(memData);

      // 2. 로컬스 객체변환 (왜? 문자형이니까!)
      memData = JSON.parse(memData);
      console.log(memData);
      // -> 배열 데이터로 변환!
      // 주의: JSON 파싱할 때 원본 형식이 제이슨 파일 형식으로
      // 엄격하게 작성되어야 에러가 없음(마지막 콤마 불허용 등)

      // 3. 배열이니까 현재 입력 데이터의 아이디가
      // 기존 배열값으로 있는지 검사함!
      // 있으면 true, 없으면 false
      let isT = memData.some((v) => v.uid === val);
      // console.log("중복id있어?", isT);

      // 4. true일 경우 중복 데이터 메시지 표시
      if (isT) {
        // 에러 메시지 업데이트
        setIdMsg(msgId[1]);
        // 에러 상태값 업데이트
        setUserIdError(true);
      } /// if ///
      // 5. false일 경우 [성공 메시지] 표시
      else {
        // 에러 상태값 업데이트 : 에러가 아님!(false)
        setUserIdError(false);
      } /// else ///
    } /// if ///
    // 3-2. 에러일 때 : 유효성 검사 에러
    else {
      console.log("에러~!");
      // 에러 메시지 업데이트
      setIdMsg(msgId[0]);
      // 아이디 에러상태 업데이트(true)
      setUserIdError(true);
    } /// else ///

    // 실제 userId 상태변수값이 업데이트 돼야만 화면에 출력된다!
    setUserId(val);
  }; ////////// changeUserId 함수 ////////////

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 비밀번호 유효성 검사식(따옴표로 싸지 말 것!)
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 2. 입력 값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setPwdError(false);
    else setPwdError(true);

    // 4. 기존 입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  // 3. 비밀번호 확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 비밀번호 입력 내용과 일치 여부 확인
    if (pwd === val) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존 입력값 반영하기
    setChkPwd(val);
  }; ///////// changeChkPwd 함수 //////////

  // 4. 사용자 이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 빈값 체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존 입력값 반영하기
    setUserName(val);
  }; ///////// changeUserName 함수 //////////

  // 5. 이메일 유효성 검사 ///////////
  const changeEmail = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 이메일 유효성 검사식(따옴표로 싸지 말 것!)
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 2. 입력 값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존 입력값 반영하기
    setEmail(val);
  }; ///////// changeEmail 함수 //////////

  // 6. 주소 유효성 검사 ///////////
  const changeAddr = () => {
    // 입력된 값 읽기
    // 앞주소(자동 입력값)
    let address1 = $(".addr1").val();
    // 뒷주소(직접 입력값)
    let address2 = $(".addr2").val();
    // 우편번호(자동 입력값)
    let zc = $(".zipcode").val();

    // 2. 빈 값 체크 : 세 값 모두 빈값이 아니면 에러 아님!
    if (address1 !== "" && address2 !== "" && zc !== "") setAddrError(false);
    else setAddrError(true);

    // 3. 기존 입력값 반영하기 : 상태변수에 반영함
    // (1) 전체 주소값 저장 (앞주소+뒷주소)
    setAddr(address1 + " " + address2);
    console.log(addr);
    // (2) 우편번호 저장
    setZipcode(zc);
    console.log(zipcode);
  }; ///////// changeUserName 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈 값일때 에러 상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);
    // 주소 체크 추가
    if (!addr) setAddrError(true);
    // 우편번호 체크 추가 -> 주소 에러로 등록(우편번호 에러 값이 따로 없음)
    if (!zipcode) setAddrError(true);

    // 2. 통과시 true, 불통과시 false 리턴 처리
    // 통과 조건 : 빈값 아님 + 에러 후크 변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      addr &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError &&
      !addrError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [ 서브밋 기능함수 ] ////////////////
  const onSubmit = (e) => {
    // 1. 기본서브밋 막기
    e.preventDefault();

    console.log("최종검사:", totalValid());

    // 2. 유효성검사 전체 통과시
    if (totalValid()) {
      console.log("모두 통과! 저장!");

      // [회원정보 로컬스토리지에 저장하기]

      // 1. 로컬스 체크 함수호출(없으면 생성!)
      initData();

      // 2. 로컬스 변수할당
      let memData = localStorage.getItem("mem-data");

      // 3. 로컬스 객체변환
      memData = JSON.parse(memData);

      // 최대수를 위한 배열값 뽑기 (idx항목)
      let temp = memData.map((v) => v.idx);
      // 다음 번호는 항상 최대수+1이다!
      console.log("다음번호:", Math.max(...temp) + 1);

      // 4. 새로운 데이터 구성하기
      let newData = {
        idx: Math.max(...temp) + 1,
        uid: userId,
        pwd: pwd,
        unm: userName,
        eml: email,
        zcode: zipcode,
        addr: addr,
      };

      // 5. 데이터 추가하기 : 배열에 데이터 추가 push()
      memData.push(newData);

      // 6. 로컬스에 반영하기 : 문자화해서 넣어야 함!
      localStorage.setItem("mem-data", JSON.stringify(memData));

      // 7. 회원가입 환영메시지 + 로그인 페이지 이동
      // 버튼 텍스트에 환영메시지
      document.querySelector(".sbtn").innerText = "Thank you for joining us!";
      // 1초 후 페이지 이동 : 라우터 Navigate로 이동
      setTimeout(() => {
        goNav("/login");
        // 주의: 경로 앞에 슬래쉬(/) 안 쓰면
        // 현재 Memeber 경로 하위 경로를 불러옴
      }, 1000);
    } /// if ///
    // 3. 불통과시
    else {
      console.log($(".msg").eq(0).text());
      alert("Change your input!");
    } /// else ///
  }; /////////// onSubmit 함수 //////////

  // 코드 리턴 구역 //////////////////
  return (
    <section id="login-page" className="page">
      <div className="longin-box">
        <h2>Join Us</h2>
        <form action="process.php" method="post">
          <ul>
            <li>
              {/* 1. 아이디 */}
              <label>ID : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="영문소문자/숫자, 4~20자"
                value={userId}
                onChange={changeUserId}
                onBlur={changeUserId}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력 요소
                userIdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {idMsg}
                    </small>
                  </div>
                )
              }
              {
                // 통과시 메시지 출력
                // 조건문 && 출력 요소
                // 조건 추가 : userId가 입력 전일 때 안 보임 처리
                // userId가 입력 전엔 false로 리턴됨!
                !userIdError && userId && (
                  <div className="msg">
                    <small
                      style={{
                        color: "green",
                        fontSize: "10px",
                      }}
                    >
                      {msgId[2]}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 5자~15자"
                value={pwd}
                onChange={changePwd}
                onBlur={changePwd}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력 요소
                pwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.pwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호 재확인"
                value={chkPwd}
                onChange={changeChkPwd}
                onBlur={changeChkPwd}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력 요소
                chkPwdError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.confPwd}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Name : </label>
              <input
                type="text"
                maxLength="20"
                placeholder="이름"
                value={userName}
                onChange={changeUserName}
                onBlur={changeUserName}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력요소
                userNameError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.req}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Address</label>
              {/* 
              [ 다음 우편번호 모듈 ]
              - 보내줄 값은 내가 정해야 함!
              - 변경 체크 함수를 프롭스 다운시킴!
              */}
              <AddressInput changeAddr={changeAddr} />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력 요소
                addrError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.req}
                    </small>
                  </div>
                )
              }
            </li>
            <li>
              <label>Email : </label>
              <input
                type="text"
                maxLength="50"
                placeholder="이메일을 입력해 주세요."
                value={email}
                onChange={changeEmail}
                onBlur={changeEmail}
              />
              {
                // 에러일 경우 메시지 출력
                // 조건문 && 출력 요소
                emailError && (
                  <div className="msg">
                    <small
                      style={{
                        color: "red",
                        fontSize: "10px",
                      }}
                    >
                      {msgEtc.email}
                    </small>
                  </div>
                )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>
                Submit
              </button>
            </li>
            <li>
              혹시 SW19 회원이신가요?
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

export default Member;
