// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";

// 상단영역 CSS 불러오기
// import "../../css/top_area.scss";

export default function TopArea() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      <header id="gnb">
        <div className="menu">
          <div className="lines">
            <p className="line">SW19</p>
            <p className="line">
              A transitional scent of the green forest | of Wimbledon, London
              SW19 | that changes over time
            </p>
          </div>
          <ul>
            <li>
              <Link to="/">HOME</Link>              
            </li>
            <li>
              <Link to="/story">STORY</Link>
            </li>
            <li>
              <a href="#">STORES</a>
            </li>
            <li>
              <a href="#">MEMBERSHIP </a>
            </li>
            <li>
              <a href="#">Q&A </a>
            </li>
          </ul>
          {/* <!-- 아이콘 박스 --> */}
          <div className="icon-box">
            {/* <!-- 햄버거 버튼 --> */}
            <div className="menu-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href="/login" className="login fa-solid fa-arrow-right">
              <span className="ir">login</span>
            </a>
            <a href="/join" className="cart fa-solid fa-arrow-left">
              <span className="ir">join</span>
            </a>
            <a href="/cart" className="cart fa-solid fa-arrow-left">
              <span className="ir">cart</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
} /////////// TopArea /////////////////////
