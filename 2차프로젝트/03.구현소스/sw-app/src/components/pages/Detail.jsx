/// SW19 상품 상세 페이지 - Detail.jsx ///
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// CSS
import "../../css/shop.scss";

function Detail() {
  const loc = useLocation();
  // console.log(loc.state);
  const tit = (loc.state.tit?loc.state.tit:'');
  const src = (loc.state.src?loc.state.src:'');
  const detail = (loc.state.detail?loc.state.detail:'');
  const price = (loc.state.price?loc.state.price:'');
  const desc = (loc.state.desc?loc.state.desc:'');
  const note = (loc.state.note?loc.state.note:'');
  const perfumer = (loc.state.perfumer?loc.state.perfumer:'');
  const ingredients = (loc.state.ingredients?loc.state.ingredients:'');
  const notice = (loc.state.notice?loc.state.notice:'');

  // 랜더링 실행 구역 ////////////////////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////

  // 뒤로 가기 버튼 함수
  function goBack() {
    window.history.back();
  } /// goBack ///

  // 코드 리턴 구역 ////////////////////////
  return (
    <>
      <section id="detail-page" className="page">
        <div className="btn-box" onClick={goBack}>
          <button className="back-btn">＜</button>
          <span>Back</span>
        </div>
        <div className="inbox col-6">
          <div className="img-box">
            <img src={process.env.PUBLIC_URL + src} alt={tit} />
          </div>
          <div className="desc-box">
            <div className="heading-area">
              <h2 className="sub-title">{tit}</h2>
              <h3 className>{price}</h3>
            </div>
            <div className="text-area">
              {desc.split("^").map((v, i) => (
                <p key={i}>{v}</p>
              ))}
              <div className="small-text">
                <aside>
                  Note:
                  {note.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
                <aside>
                  Perfumer:
                  {perfumer.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
                <aside>
                  Ingredients:{" "}
                  {ingredients.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
              </div>
              <div className="notice-text">
                <aside>
                  {notice.split("^").map((v, i) => (
                    <p key={i}>{v}</p>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="detail-box col-12">
          <div className="img-box">
            <img src={process.env.PUBLIC_URL + detail} alt={tit} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Detail;
