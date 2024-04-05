// Beanpole 메인 JS - main.js //

document.querySelector("html").style.scrollBehavior = "smooth";

// 8초 후 아래로 이동 //////
setTimeout(() => {
  console.log('8초 후 이동함');
  window.scrollTo(0, document.querySelector("#ban").offsetTop);
  
  // 자동 넘김 호출 함수 최초 호출하기
  autoSlide();
}, 8000);

// 슬라이드 배너 이벤트 //////
const slide = document.querySelector(".slider");
console.log(slide.querySelectorAll("li"));

function goSlide() {
  // (1) 먼저 왼쪽으로 이동하기
  slide.style.left = "-100%";
  slide.style.transition = ".6s ease-in-out";

  // (2) 이동하는 시간 0.7초간 기다림!
  setTimeout(() => {
    // (2-1) 맨 앞 li 맨 뒤로 이동
    slide.appendChild(slide.querySelectorAll("li")[0]);
    // 슬라이드 left 값이 -100% 이므로
    // (2-2) left값을 0으로 변경
    slide.style.left = "0";
    // (2-3) left 트랜지션 없애기
    slide.style.transition = "none";
  }, 700);
} ///////////// goSlide 함수 ////////////////
/////////////////////////////////////////////

// 배너 자동 넘김 호출 함수 /////
function autoSlide() {
  setInterval(goSlide, 3000);
} //////////////// autoSlide 함수 ////////////////

// 슬라이드 배너 버튼 //////
const abtn=querySelectorAll(".abtn");
const slide=querySelectorAll(".slider");


// 마우스커서 이벤트 //////
const cursor=document.querySelector('.cursor');
const myBody=document.body;

myBody.onmousemove=(e)=>{
  cursor.style.top=e.pageY+'px';
  cursor.style.left=e.pageX+'px';
}; /// mousemove ///
