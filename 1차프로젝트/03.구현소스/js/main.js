// Beanpole 메인 JS //

// 8초 후 아래로 이동
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(() => {
  console.log('여기요');
  window.scrollTo(0, document.querySelector("#ban").offsetTop);
  
  // 자동넘김호출함수 최초호출하기
  autoSlide();
}, 8000);

// 슬라이드 대상 : .slider
const slide = document.querySelector(".slider");
console.log(slide.querySelectorAll("li"));

/****************************************** 
   함수명: goSlide
    기능: 슬라이드 이동
******************************************/
function goSlide() {
  // (1)먼저 왼쪽으로 이동하기
  slide.style.left = "-100%";
  slide.style.transition = ".6s ease-in-out";

  // (2)이동하는 시간 0.6초간 기다림!
  setTimeout(() => {
    // (2-1) 맨앞 li 맨뒤로 이동
    slide.appendChild(slide.querySelectorAll("li")[0]);
    // 슬라이드 left 값이 -100% 이므로
    // (2-2) left값을 0으로 변경
    slide.style.left = "0";
    // (2-3) left 트랜지션 없애기
    slide.style.transition = "none";
  }, 600);

  // 맨 앞li 맨뒤로 이동하기
  // appendChild(요소)
  // -> 원래 뒤에 요소추가기능임
  // -> 기존있는 요소를 선택시
  // 맨뒤로 이동함
  // 맨앞요소를 선택하여 맨뒤로 보냄
} ///////////// goSlide 함수 ////////////////
/////////////////////////////////////////////


// [ 자동넘김호출함수 ] /////
function autoSlide() {
  setInterval(goSlide, 3000);
} /////// autoSlide 함수 /////////////
