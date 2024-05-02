// 스타워즈 서브페이지 : Ahsoka 메인 JS - main.js

import mFn from "./my_function.js";

// 비디오 영역 아이프레임 src 변경
const slidePeek = mFn.qsa(".slide-peek-box li");
const ifr = mFn.qs("#ifr");

console.log("슬라이드 픽:", slidePeek, "\n 동영상:", ifr);

const movieId = {
  Trailer: "J_1EXWNETiI",
  "Masters and Apprentices": "UTqPkjk0GLU",
  Phenomenon: "dp-9AoWxchE",
  "Sabine’s Loth-Cat": "uSqsyC780OY&t=2s",
};

slidePeek.forEach((ele, idx) => {
  ele.onclick = () => {
    let txt = ele.querySelector("img").getAttribute("alt");
    console.log("나 클릭!", ele);

    ifr.setAttribute(
      "src",
      `https://www.youtube.com/embed/${movieId[txt]}?autoplay=1`
    );

    forEach((x, i) => {
      if (i === idx) {
        x.parentElement.classList.add("on");
      } /// if ///
      else {
        x.parentElement.classList.remove("on");
      } /// else ///
    }); /// forEach ///
  }; /// onclick ///
}); ////// forEach //////

// 스크롤 페이드인/아웃
const stage = mFn.qsa(".page");
const scAct = mFn.qsa(".scAct");
console.log("페이지:", stage, "\n scAct박스:", scAct);

const pagePos = [];
stage.forEach((ele, idx) => {
  pagePos[idx] = ele.offsetTop;
});
console.log("페이지 높이값:", pagePos);

mFn.addEvt(window, "scroll", scrollFn);

const CRITERIA = (window.innerHeight / 3) * 2;

function scrollFn() {
  stage.forEach((ele, idx) => {
    // 대상의 BCR값 알아오기
    let pos = mFn.getBCR(ele);

    // console.log('스크롤~',pos);

    // 기준값보다 작아지면 on 넣기
    if (pos < CRITERIA) {
      scAct[idx].classList.add("on");
    } else {
      scAct[idx].classList.remove("on");
    }
  });
} ///////////// scrollFn /////////////
