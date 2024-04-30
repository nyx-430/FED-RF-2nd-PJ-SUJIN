// 스타워즈 서브페이지 : Ahsoka 메인 JS - main.js

import mFn from "./my_function.js";

//console.log(mFn);
const stage=mFn.qsa('.page');
const scAct=mFn.qsa('.scAct');
console.log('페이지:',stage,'\n scAct박스:',scAct);

const pagePos = [];
stage.forEach((ele,idx)=>{
  pagePos[idx] = ele.offsetTop;
})
console.log('페이지 높이값:',pagePos);

//const CRITERIA=window.innerHeight/2;

// let pos=getBCR;
// 
// function scrollFn(x){
//     let xval=pos(x);
// 
//     if(xval < CRITERIA && xval > 0){
//         x.classList.add("on");
//     } /// if ///
// } /////////// scrollFn ///////////
// 
// window.addEvt("scroll",()=>{
//     for(let x of scAct) scrollFn(x);
// });

mFn.addEvt(window,'scroll',scrollFn);

const CRITERIA=window.innerHeight/2

function scrollFn(){

    stage.forEach((ele,idx)=>{
        // 대상의 BCR값 알아오기
        let pos=mFn.getBCR(ele);
    
        console.log('스크롤~',pos);
    
        // 기준값보다 작아지면 on 넣기
        if(pos < CRITERIA){
            scAct[idx].classList.add('on');
        } 
        else{
            scAct[idx].classList.remove('on');
        }

    })
} ///////////// scrollFn /////////////