import React, { useRef, useState } from "react";

import {collBan} from "../data/banner_data";

function Collection({catName}) {
  const [catArr,setCatArr] = useState(catName);
  const collBanAttr = useRef(Object.keys(collBan));
  const collNum = useRef(0);
  // useRef 로 셋팅한 참조변수는 사용시 변수.current 로 쓴다!

  const selData = collBan[catArr];

  console.log(catName);
  console.log(selData);
  console.log("콜밴키배열:",collBanAttr);

  // 속성데이터 변경 함수 
  const chgData = (e) => {
    // 버튼구분 : isR 오른쪽버튼이면 true
    let isR = e.target.classList.contains("rb");
    console.log(isR);
    // 오른쪽버튼은 배열번호 증가
    if(isR){
      collNum.current++;
      if(collNum.current >= collBanAttr.current.length){
        collNum.current = 0;
      }
    }
    // 왼쪽버튼은 배열번호 감소
    else{
      collNum.current--;
      if(collNum.current < 0){
        collNum.current = collBanAttr.current.length-1;
      }
    }
    setCatArr(collBanAttr.current[collNum.current]);
  };

  return (
    <section id="collection-page" className="page">
      <div className="inbox">
        <div className="collection">
          <h1 className="title">Collections</h1>
          <div className="slider">
            <div className="img-box">
              <img src={selData.src} alt="6am" />
            </div>
            <div className="goods-box">
              <img src="./images/collection/main_6am.jpg" alt="6am" />
              <div className="desc-box">
                <img src={selData.timg} alt="6am" />
                <button className="abtn lb" onClick={chgData}>＜</button>
                <button className="abtn rb" onClick={chgData}>＞</button>
                <h3>
                  {selData.tit1}
                </h3>
                <p>
                  Just before the sunrise,
                  <br />
                  the mist of Wimbledon forest drifts along
                  <br />
                  and greets you as you take a stroll.
                  <br />
                  Feel the 6AM scent of the Wimbledon forest’s
                  <br />
                  glistening morning dew and moist soil.
                </p>
                <p>안개가 자욱한 윔블던 숲의 새벽</p>
                <p>
                  세상의 아침이 시작되기 전,
                  <br />
                  윔블던의 숲을 산책하는 당신에게
                  <br />
                  푸른 안개가 바람에 실려와 인사를 합니다.
                  <br />
                  이슬 머금은 잔디와 촉촉한 흙내음을 품은
                  <br />
                  윔블던의 새벽 6시를 느껴보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
