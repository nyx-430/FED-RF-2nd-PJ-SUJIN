import React from "react";

function Product(props) {
  return (
    <section id="product-page" className="page">
      <div className="inbox">
        <h2 className="title">Product</h2>
        <div className="banner-box">
            <img src="./images/MAIN_SLIDE_PC_SUMMER.jpg" alt="" />
        </div>
        <div className="pbox ">
          <ul>
            <li>
              <img src="./images/set_6am.png" alt="6am" />
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
    </section>
  );
}

export default Product;
