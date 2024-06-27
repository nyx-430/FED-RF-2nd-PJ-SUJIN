import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// CSS불러오기
import "../../css/searching.scss";

// 상품 데이터 불러오기
import { perfumeData } from "../data/perfume_data";
import { handData } from "../data/handcare_data";
import { bodyData } from "../data/bodycare_data";

// 캐릭터 리스트 결과 컴포넌트
import SearchingCat from "./SearchingCat";

function Searching({ kword }) {
  const { state } = useLocation();
  console.log("전달값:", state.category);

  // 데이터 합치기 : ...(스프레드 연산자)사용
  let selData = [...perfumeData, ...handData, ...bodyData];

  // 데이터 처리대상 : 나중에 처리 대상 변경만 하면 끝!
  let rangeData = ["Perfume", "Body Care", "Hand Care"];

  // console.log(selData);
  console.log("데이터대상인가?", rangeData.includes(state.category));

  // state전달값이 빈값이 아니면 배열filter돌리기
  // 배열.includes(특정값) -> 배열값 만큼 돌면서 검사후 있으면 true
  if (rangeData.includes(state.category)) {
    selData = selData.filter((v) => {
      if (v.category === state.category) return true;
    });
  }

  console.log(selData);

  // kword - 전달 받은 키워드
  console.log("kword:", kword);
  console.log("data:", selData);

  // 키워드에 따라 검색 결과가 달라지므로
  // 핵심 데이터인 검색어를 상태관리변수로 만든다!

  // ((상태관리변수)) //////////////
  // [1] 검색어 상태관리변수
  const [kw, setKw] = useState(kword);
  // 초기값으로 전달 받은 검색어 변수를 넣어준다!

  // [2] 정렬 기준 상태관리변수
  const [sort, setSort] = useState("asc");
  // 값: 오름차순 - asc / 내림차순 - desc

  // 상단 메뉴 검색창에서 다시 검색할 경우
  // 검색 가능하도록 검색어 비교를 위한 검색어를 저장한다!
  // 리랜더링 없이 값만 저장하는 후크는? useRef참조변수 사용!
  const beforeKword = useRef(kword);
  // 참조변수는 객체이다! 그래서 하위 속성 중
  // current속성으로 값을 읽거나 업데이트 한다!

  console.log("참조변수객체:", beforeKword);

  // 만약 조금 전 저장된 검색어와 지금 검색어가 다르다면
  // 검색어 상태변수를 업데이트 한다!
  if (beforeKword.current != kword) {
    console.log(beforeKword.current, "==?", kword);
    // 1. 컴포넌트 리랜더링 (검색 결과 변경)
    setKw(kword);

    // 2. 다음 검색을 위해 다시 현재 검색어를 참조변수에 저장
    beforeKword.current = kword;

    // 3. 상단 검색어를 현재 검색창에 넣기
    document.querySelector("#schin").value = kword;
  } /// if ///

  // 검색어가 있는 데이터 필터하기
  // filter()는 검색 결과가 항상 배열로 나옴!
  const newList = selData.filter((v) => {
    // 속성중 캐릭터 이름 중 검색(v.cname)
    // 검색어는 모두 영어일 경우 소문자 처리함
    let newVal = v.cname.toLocaleLowerCase();

    // 전달 받은 키워드도 소문자 처리
    // ((중요!!!)) 상태변수인 kw로 대체한다!!!
    let key = kw.toLocaleLowerCase();

    // 문자열이 있는 값만 배열로 재수집!
    if (
      // 1과 2의 조건이 모두 true여야 return함!
      // 1. 검색어 조건 (cname 속성)
      newVal.indexOf(key) !== -1)
      return true;
    // 문자열.indexOf(문자) 문자열 위치 번호 리턴함
    // 그런데 결과가 없으면 -1을 리턴함!
    // 그래서 -1이 아닐 경우 true를 리턴하면
    // filter에서 변수에 저장할 배열로 수집된다!
  }); //////////////// filter ///////////////////

  // [ 결과내 재검색 : 데이터 항목 중 alignment값으로 검색함! ]

  // [ 정렬 기능 추가하기 ] /////////
  // (1) 오름차순일 경우
  if (sort == "asc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0
    );
  } /// if ///
  // (2) 내림차순일 경우
  else if (sort == "desc") {
    newList.sort((a, b) =>
      a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0
    );
  } /// else if ///

  console.log("newList:", newList);

  /* 
        변수 = 배열.filter(v=>{
            if(v.속성명.indexOf(검색어)!=-1) return true
        })

        -> 결과는 검색어가 있는 경우 변수에 모아서 담아준다!
        -> 결과값도 배열, 결과가 없어도 빈 배열!
    */

  // 코드 리턴 구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
            />
            {/* 입력창 */}
            <input
              id="schin"
              type="text"
              placeholder="Filter by Keyword"
              defaultValue={kword}
              // 엔터키를 눌렀을 때 검색 실행!
              // 검색어 상태변수만 업데이트하면 끝!!!
              // -> setKw(검색어)
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  // 1. 검색어 상태값 변경
                  setKw(e.target.value);
                  // 2. 처음 검색시 정렬은 기본 정렬 오름차순(asc)
                  setSort("asc");
                  // 3. 정렬선택박스 선택값 변경 (DOM에서 보이기 변경)
                  document.querySelector("#sel").value = "asc";
                } /// if ///
              }}
            />
          </div>
        </div>  
        {/* 2. 결과 리스트 박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">Browes Products ({newList.length})</h2>
          {/* 2-2. 정렬 선택 박스 */}
          <aside className="sortbx">
            <select
              name="sel"
              id="sel"
              className="sel"
              // 값을 변경할 때 이벤트 발생
              onChange={(e) => {
                console.log(e.target.value);
                // 정렬 기준 상태변수 업데이트
                setSort(e.target.value);
              }}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째 값만 보냄 */}
          <SearchingCat dt={newList} />
        </div>
      </section>
    </>
  );
}

export default Searching;
