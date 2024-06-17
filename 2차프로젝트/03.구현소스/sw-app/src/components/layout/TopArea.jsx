// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import { faBa } from "@fortawesome/free-regular-svg-icons";
// import { faCamera } from "@fortawesome/free-brands-svg-icons";

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
              A transitional scent of the green forest | of Wimbledon, London{" "}
              <br />
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
          {/* 메뉴 아이콘 박스 */}
          <div className="menu-box">
              {/* <!-- 햄버거 버튼 --> */}
              <div className="menu-button">
                <span></span>
                <span></span>
                <span></span>
              </div>
            {/* <!-- 하단 아이콘 박스 --> */}
            <div className="icon-box">
              <a href="/login" className="menu-buttom">
                <FontAwesomeIcon icon={faRightToBracket} />
              </a>
              <a href="/join" className="menu-buttom">
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a href="/cart" className="menu-buttom">
                <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} /////////// TopArea /////////////////////
