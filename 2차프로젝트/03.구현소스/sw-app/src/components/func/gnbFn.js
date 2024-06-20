// GNB 관련 함수 - gnbFn

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 전체 페이지 번호
let pno = 0;

// 전체 페이지 번호 초기화 함수
const zeroPno = () => {pno=0};

// 페이지 요소
let pg;

// 전체 페이지 개수
let pgcnt;

console.log("페이지 개수:", pgcnt, pg);

// 요소를 할당한 경우 로딩 구역에서 할당
$(()=>{
  // 페이지 요소
  pg = $(".page");

  // 전체 페이지 개수
  pgcnt = pg.length;  

}); ////////////////// load //////////////////

// 클릭된 메뉴에 class 'on' 넣기
const addOn = () => {
  $(".menu-button").toggleClass("on");
  $(".menu-open").toggleClass("on");
}; //////////// addOn함수 ////////////


// 내보내기
export default { addOn };
