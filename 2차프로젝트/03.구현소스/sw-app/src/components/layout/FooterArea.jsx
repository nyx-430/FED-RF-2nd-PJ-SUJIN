// 하단영역 컴포넌트 ///

// 하단영역 CSS 불러오기
// import "../../css/footer_area.scss";

export default function FooterArea() {
  //// 코드 리턴구역 //////////////
  return (
    <footer id="footer-page">
      <div className="inbox">
        <div className="bg-color"></div>
        <div className="footer-box">
          <img className="footer-logo" src="./images/logo_w.png" alt="logo" />
          <ul>
            <li>
              <a
                target="_blank"
                href="https://www.google.com/maps/@51.4390411,-0.2060724,3a,75y,177.6h,112.58t/data=!3m8!1e1!3m6!1sAF1QipNVOoAsKrqSsZsIzMvSN9i6Erg6gUBjSqRKqOCr!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNVOoAsKrqSsZsIzMvSN9i6Erg6gUBjSqRKqOCr%3Dw900-h600-k-no-pi-22.58-ya119.6-ro0-fo90!7i8704!8i4352?coh=205410&entry=ttu"
              >
                Experience SW19
              </a>
            </li>
            <li>
              <a 
              target="_blank"
              href="https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r">
                SW19 in Google Earth
              </a>
            </li>
          </ul>
        </div>
        <div className="info-box">
          <span>
            Company: (주)왁티 | Owner: 강정훈 / 06028 서울특별시 강남구
            압구정로10길 7 (신사동) 3층 왁티
          </span>
          <span>
            Company Registration No.: 240-88-00299 / Telecommunication services
            registration No.: 제2016-서울강남-03076호
          </span>
          <span>Email: support@sw19official.com / Tel: 1660-3252</span>
          <span>Copyright © SW19 . All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
} /////////// FooterArea /////////////////////
