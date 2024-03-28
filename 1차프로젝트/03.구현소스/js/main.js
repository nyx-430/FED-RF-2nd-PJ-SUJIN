// Beanpole 메인 JS //

// 8초 후 아래로 이동
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(() => {
  window.scrollTo(0, document.querySelector("#ban-area").offsetTop);
}, 8000);

// 휠 이벤트 - x
// 페이지 변수
let pgNum=0;

// 휠 상태 변수
let stsWheels=false;

// .page 클래스 요소
// const elePage=document.querySelector('.page');

// 전체 페이지수
const totalCnt=elePage.length;

console.log('대상:',elePage,totalCnt);

// 이벤트 등록
window.addEventListener("wheel",wheelFn,{passive:false});

function wheelFn(e){
  console.log('휠이 안 됨!');

  e.preventDefault();

}; //////////// wheelFn ////////////
///////////////////////////////////




