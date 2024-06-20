import React from "react";

function Promotion(props) {
  return (
    <section id="Promotion-page" className="page">
      <div className="inbox">
        <h2 className="title">Promotion : The Summer, We Loved at 3PM</h2>
        <div className="banner-box">
            <img src="./images/promotion/MAIN_SLIDE_PC_SUMMER.jpg" alt="" />
        </div>
        <div className="pbox ">
        <h1 className="title">Product</h1>
          <div className="col-12">
              <ul>
                <li>
                  <img src="./images/set_6am.png" alt="6am" />
                  <h2>상품명</h2>
                  <h3>가격</h3>
                </li>
                <li>
                  <img src="./images/set_noon.jpg" alt="noon" />
                </li>
                <li>
                  <img src="./images/set_3pm.png" alt="3pm" />
                </li>
                <li>
                  <img src="./images/set_9pm.png" alt="9pm" />
                </li>
                <li>
                  <img src="./images/set_mid.jpg" alt="mid" />
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
