import React from "react";
import { pmData } from "../data/promotion_data";

function Promotion(props) {
  return (
    <section id="Promotion-page" className="page">
      <div className="inbox">
        <h2 className="title">Promotion : The Summer, We Loved at 3PM</h2>
        <div className="banner-box">
          <img
            src="./images/promotion/MAIN_SLIDE_PC_SUMMER.jpg"
            alt="promotion"
          />
        </div>
        <div className="pbox ">
          <h1 className="title">Product</h1>
          <div className="col-12">
            <ul>
              {/* <li>
                <img src="./images/promotion/pm_products/p_3pm.png" alt="1" />
              </li> */}
              {pmData.map((v, i) => (
                <li key={i}>
                  <img src={v.img} alt={v.tit} />
                  <h2>{v.tit}</h2>
                  <h3>{v.price}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
