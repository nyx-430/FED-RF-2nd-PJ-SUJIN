// 메인 페이지 컴포넌트 ///

// 메인 페이지용 CSS
import "../../css/index.scss";

export default function Main() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* <!-- 인트로 영역 : intro-page --> */}
      <section id="intro-page" className="page">
        <div className="inbox">
          <div className="desc-box">
            <img className="intro-logo" src="./images/logo_w.png" alt="logo" />
            <h2 className="main-title">
              A transitional scent of the green forest of
              <br />
              Wimbledon, London SW19
            </h2>
            <h2 className="main-title">
              시간에 따라 변화하는 런던 윔블던 숲과 공원의 향
            </h2>
            <h2 className="main-title">
              The Beginning Of The Story Wimbledon Forest
            </h2>
            <p className="main-text1">
              Our fragrance brand took its name after the Wimbledon district
              postal code “SW19". Wimbledon is a charming, peaceful town
              surrounded by green forests and parks in the southwest part of
              London. As strolling through Wimbledon Park, we encounter people
              playing football on fresh grass in the early morning, children
              giggling and playing under the warm sun, starlight twinkling as
              lovers whisper in the dark. Our scents 6am, noon, 3pm, 9pm &
              midnight, portrays Wimbledon's transitional scents change over
              time.
            </p>
            <p className="main-text2">
              ‘SW19’은 윔블던 지역의 우편 주소로, 영국 런던의 남서쪽에 위치한
              푸른 숲과 공원으로 둘러싸여진 평화롭고 아름다운 도시입니다. 윔블던
              파크를 걷다 보면, 이른 아침 저 멀리 잔디 위에서 축구공을 차는
              사람들의 숨소리, 따뜻한 햇살 아래 해맑게 뛰노는 꼬마들의 웃음소리,
              그리고 반짝이는 별빛 아래 사랑을 속삭이는 연인들의 목소리를 만나게
              됩니다. 이처럼 시간에 따라 변화하는 윔블던의 초록빛 싱그러움을
              6am, Noon, 3pm, 9pm, Midnight 5가지 시간에 향수로 담았습니다.
              하루의 시간, 일상 속 행복의 순간으로부터 시작된 SW19의 향을 통해
              당신의 가장 빛나고 따뜻한 ‘순간’으로 떠나보세요.
            </p>
          </div>
        </div>
      </section>
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
} /////////// Main /////////////////////
