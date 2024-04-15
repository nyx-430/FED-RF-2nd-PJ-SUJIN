// Beanpole 메인 JS - main.js //

document.querySelector("html").style.scrollBehavior = "smooth";

// 8초 후 아래로 이동 ////////////
setTimeout(() => {
  console.log('8초 후 이동함');
  window.scrollTo(0, document.querySelector("#ban").offsetTop);
  
  // 자동 넘김 호출 함수 최초 호출하기
  autoSlide();
}, 8000);

// 슬라이드 배너 이벤트 ////////////
const slide = document.querySelector(".slider");
// console.log(slide.querySelectorAll("li"));

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

// 배너 자동 넘김 호출 함수
function autoSlide() {
  setInterval(goSlide, 3000);
} //////////////// autoSlide 함수 ////////////////
/////////////////////////////////////////////////


// 마우스커서 이벤트 ////////////
const cursor=document.querySelector('.cursor');
const myBody=document.body;

myBody.onmousemove=(e)=>{
  cursor.style.top=e.clientY+'px';
  cursor.style.left=e.clientX+'px';
}; /////////// mousemove ///////////

// 영역별 마우스 오버 체크 커서 변경하기
// 이벤트 대상 : #ban-area
// 대상 : cursor
const cursorSet = document.querySelectorAll('.cursor-set');

cursorSet.forEach(ele=>{
  ele.onmouseenter = ()=>{
    cursor.classList.add(
      ele.getAttribute('data-cursor'));
  };
  ele.onmouseleave = ()=>{
    cursor.classList.remove(
      ele.getAttribute('data-cursor'));
  };
}); /// forEach ///

// 햄버거 버튼 클릭으로 메뉴 열고 닫기
const menuBtn=document.querySelector('.hambtn');
const menuBox=document.querySelector('.menu-box');

console.log('메뉴 버튼:',menuBtn,'메뉴 박스:',menuBox);

menuBtn.addEventListener('click',showmenu);

function showmenu(){
  menuBox.style.display='block';
}