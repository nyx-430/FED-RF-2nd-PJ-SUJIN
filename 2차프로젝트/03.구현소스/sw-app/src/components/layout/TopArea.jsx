// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faBa } from "@fortawesome/free-regular-svg-icons";
// import { faCamera } from "@fortawesome/free-brands-svg-icons";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";

export default function TopArea() {
  // 클래스 on 함수
  const addOn = () => {
    document.querySelector(".menu-button").classList.toggle("on");
    document.querySelector(".menu-open").classList.toggle("on");
  }; ////// addOn //////

  // 코드 리턴 구역 //////////////
  return (
    <>
      <header id="gnb">
        <div className="menu">
          <div className="lines">
            <a href="/">
              <span className="line">SW19</span>
            </a>
            <p className="line">
              A transitional scent of the green forest | of Wimbledon, London{" "}
              <br />
              SW19 | that changes over time
            </p>
          </div>
          {/* 메뉴 아이콘 박스 */}
          <div className="menu-box">
            {/* <!-- 햄버거 버튼 --> */}
            <div className="menu-button" onClick={addOn}>
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
        {/* 사이드 메뉴 */}
        <aside className="menu-open">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button className="schbtn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <ul>
            {menu.map((v, i) => (
              <li key={i}>
                {v.sub ? (
                  <a href="#">{v.txt}</a>
                ) : (
                  <Link to={v.link}>{v.txt}</Link>
                )}
                {v.sub && (
                  <div className="smenu">
                    <ol>
                      {v.sub.map((v, i) => (
                        <li key={i}>
                          <Link to={v.link}>{v.txt}</Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </li>
            ))}
            {/* <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/story">STORY</Link>
              </li>
              <li>
                <Link to="/store">STORE</Link>
              </li>
              <li>
                <Link to="/membership">MEMBER SHIP</Link>
              </li>
              <li>
                <Link to="/board">Q&A</Link>
              </li> */}
          </ul>
        </aside>
      </header>
    </>
  );
} /////////// TopArea ///////////
