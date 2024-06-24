import React, { useRef, useState } from "react";

import { collBan } from "../data/banner_data";

function Collection({ catName }) {
  const [catArr, setCatArr] = useState(catName);
  const collBanAttr = useRef(Object.keys(collBan));
  const collNum = useRef(0);
  // useRef 로 셋팅한 참조변수는 사용시 변수.current 로 쓴다!

  const selData = collBan[catArr];

  console.log(catName);
  console.log(selData);
  console.log("콜밴키배열:", collBanAttr);

  // 속성데이터 변경 함수
  const chgData = (e) => {
    // 버튼구분 : isR 오른쪽버튼이면 true
    let isR = e.target.classList.contains("rb");
    console.log(isR);
    // 오른쪽버튼은 배열번호 증가
    if (isR) {
      collNum.current++;
      if (collNum.current >= collBanAttr.current.length) {
        collNum.current = 0;
      }
    }
    // 왼쪽버튼은 배열번호 감소
    else {
      collNum.current--;
      if (collNum.current < 0) {
        collNum.current = collBanAttr.current.length - 1;
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
              <img src={selData.src} alt="sw19" />
            </div>
            <div className="goods-box">
              <img src={selData.mimg} alt="sw19" />
              <div className="desc-box">
                <img src={selData.timg} alt="sw19" />
                <button className="abtn lb" onClick={chgData}>
                  ＜
                </button>
                <button className="abtn rb" onClick={chgData}>
                  ＞
                </button>
                <h3>{selData.tit1}</h3>
                <div>
                  {selData.desc1.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </div>
                <p>{selData.tit2}</p>
                <div>
                  {selData.desc2.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
