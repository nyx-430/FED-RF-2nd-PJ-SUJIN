// Beanpole 메인 JS //

let pgNum=0;
let stsWheels=false;

const elePage=document.querySelector('.page');
const totalCnt=elePage.length;

console.log('메인페이지:',elePage);

window.addEventListener("wheel",wheelFn,{passive:false});

function wheelFn(e){
  console.log('휠이 안 됨!');

  e.preventDefault();


}; ///////// wheelFn /////////
/////////////////////////////


// 8초 후 아래로 이동
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(() => {
  window.scrollTo(0, document.querySelector("#ban-area").offsetTop);
}, 8000);