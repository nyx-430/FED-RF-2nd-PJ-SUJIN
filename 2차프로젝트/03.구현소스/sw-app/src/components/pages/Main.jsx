// 메인 페이지 컴포넌트

// 메인 페이지용 CSS
import "../../css/index.scss";

// 컴포넌트 불러오기
import StoryIntro from "../modules/StoryIntro";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* <!-- 1. 스토리 인트로 컴포넌트 --> */}
        <StoryIntro />

      {/* <!-- 메인 영역 : main-page --> */}
      <section id="main-page" className="page">
        <div className="inbox">
          <div className="collection">
            <h2 className="title">Collections</h2>
            <div className="slider">
              <div className="img-box">
                <img src="./images/img_6am.png" alt="6am" />
              </div>
              <div className="goods-box">
                <img src="./images/s1.jpg" alt="6am" />
                <div className="desc-box">
                  <img src="./images/tit_6am.png" alt="6am" />
                  <h3>
                    WIMBLEDON FOREST AT DAWN IN THE MIST
                    <br />
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
      {/* <!-- 대표상품 영역 : product-page --> */}
      <section id="product-page" className="page">
        <div className="inbox">
          <h2 className="title">Product</h2>
        </div>
      </section>
    </>
  );
} /////////// Main ///////////
