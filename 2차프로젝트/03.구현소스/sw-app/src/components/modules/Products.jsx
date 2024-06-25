import React from "react";

// 상품 데이터 불러오기
import { perfumeData } from "../data/perfume_data";

function Products(props) {
  return (
    <>
      <section id="product-page" className="page">
        <h1 className="big-title">타이틀</h1>
        <div className="pbox ">
          <div className="col-12">
            <ul>
              {perfumeData.map((v, i) => (
                <li key={i}>
                  <div className="img-box">
                    <img src={v.src} alt={v.tit} />
                    <div className="overlay"></div>
                  </div>
                  <h2>{v.tit}</h2>
                  <h3>{v.price}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
