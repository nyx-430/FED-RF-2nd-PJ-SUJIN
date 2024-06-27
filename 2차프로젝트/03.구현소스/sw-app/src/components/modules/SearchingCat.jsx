// DC PJ 캐릭터 검색결과 리스트 컴포넌트
import React from "react";

// CSS불러오기
import "../../css/searching_cat.scss";

// 라우터돔 Link
import { Link } from "react-router-dom";

function SearchingCat({ dt }) {
  // dt - 검색된 배열데이터

  // total - 검색된 배열데이터 개수
  const total = dt.length;
  console.log("데이터수:", total);

  return (
    <>
      {
        // 데이터 개수가 0이 아닐 때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link
                  to="/detail"
                  /* state로 3가지 값을 넘겨준다! */
                  state={{
                    tit: v.tit,
                    src: v.src,
                    price: v.price,
                    desc: v.desc,
                    note: v.note,
                    perfumer: v.perfumer,
                    ingredients: v.ingredients,
                  }}
                >
                  <img src={v.src} alt={v.tit} />
                  <h3>{v.tit}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        // 선택 데이터가 0개이면 아래 출력
        total == 0 && (
          <h2 style={{ textAlign: "center" }}>
            Sorry, we don't have any matches for that.
          </h2>
        )
      }
    </>
  );
}

export default SearchingCat;
