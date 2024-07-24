/// SW19 멤버쉽 페이지 - MemberShip.jsx ///
import React, { useEffect, useState } from "react";

// 제이쿼리
import $ from "jquery";

// CSS
import "../../css/membership.scss";

function MemberShip(props) {
  // 클래스 visible 상태관리변수
  const [visible, setVisible] = useState(false);

  // 랜더링 구역 ////////////////////////
  useEffect(() => {
    // 클래스 visible
    setVisible(true);

    const scAct = $(".scAct");
    const CRITERIA = (window.innerHeight / 3) * 2;

    $(window).on("scroll", () => {
      scAct.each((idx, ele) => {
        let pos = ele.getBoundingClientRect().top;
        if (pos < CRITERIA) $(ele).addClass("on");
      });
    });
  }, []); ///////////// useEffect /////////////
  // 화면 랜더링 실행 구역 //////////
  useEffect(() => {
    window.scrollTo(0, 0);
  }); /////////////////////////
  // 코드 리턴 구역 /////////////////
  return (
    <>
      <section id="membership-page" className="page">
        <h1 className="title">MEMBERSHIP REWARD</h1>
        <div className="inbox">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/images/membership.jpg"}
              alt="membership"
            />
          </div>
          <div className="desc-box">
            <h3>SW19의 회원분들께 제공하는 특별한 리워드 혜택을 소개합니다.</h3>
            <p>*VVIP, VIP 분들께는 시크릿 리워드 혜택이 추가로 제공됩니다.</p>
          </div>
          {/* 큰 제목 */}
          <h3 className="storesTextTitle scAct">등급별 혜택</h3>
          {/* 내용 */}
          <ul className="storesText">
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3 className="hFamily_PD">VVIP</h3>
                  <p>
                    1년간 누적 <b>200만원 이상</b> 구매 회원
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3 className="empty">&nbsp;</h3>
                  <p>멤버십 업그레이드 20,000P 지급</p>
                  <p>구매금액 5% 적립</p>
                  <p>상시 5% 할인</p>
                  <p>배송비 무료</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3 className="hFamily_PD">VIP</h3>
                  <p>
                    1년간 누적 <b>100만원 이상</b> 구매 회원
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3 className="empty">&nbsp;</h3>
                  <p>멤버십 업그레이드 10,000P 지급</p>
                  <p>구매금액 5% 적립</p>
                  <p>상시 3% 할인</p>
                  <p>배송비 무료</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3 className="hFamily_PD">TOP</h3>
                  <p>
                    1년간 누적 <b>50만원 이상</b> 구매 회원
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3 className="empty">&nbsp;</h3>
                  <p>멤버십 업그레이드 5,000P 지급</p>
                  <p>구매금액 3% 적립</p>
                  <p>상시 3% 할인</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3 className="hFamily_PD">MIDDLE</h3>
                  <p>
                    1년간 누적 <b>20만원 이하</b> 구매 회원
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3 className="empty">&nbsp;</h3>
                  <p>멤버십 업그레이드 3,000P 지급</p>
                  <p>구매금액 3% 적립</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg">
                  <h3 className="hFamily_PD">BASE</h3>
                  <p>가입 후 1년간 미구매 회원</p>
                </li>
                <li className="hImg scAct">
                  <h3 className="empty">&nbsp;</h3>
                  <p>가입 시 3,000P 지급</p>
                  <p>구매금액 1% 적립</p>
                </li>
              </ul>
            </li>
          </ul>
          {/* 큰 제목 */}
          <h3 className="storesTextTitle scAct">공통 혜택</h3>
          <ul className="storesText">
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3>생일 쿠폰 발행</h3>
                  <p>
                    SW19 멤버분들의 생일 축하 기념 10%할인 쿠폰이 제공됩니다.
                  </p>
                  <p className="small">
                    *해당 쿠폰은 발급 후 한 달 이내 사용이 가능합니다.
                    <br />
                    *해당 쿠폰은 사용 금액 제한이 있습니다.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3>카카오채널 추가 시 5% 추가 할인</h3>
                  <p>
                    SW19 카카오톡 플러스 친구 추가 시 발급되는
                    <br />
                    코드를 입력하시면 5% 추가 할인이 제공됩니다.
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3>당일 배송 서비스</h3>
                  <p>
                    서울 전지역 / 경기 일부 지역에서는
                    <br />
                    오후 1시 이전 결제 시 당일 배송으로 제품을 받아 보실 수
                    있습니다.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="listTwo scAct">
                <li className="hImg scAct">
                  <h3>선물 포장 서비스</h3>
                  <p>
                    기프트 세트 구매 시 기프트 패키지 또는
                    <br />
                    리본 포장 서비스를 제공합니다.(선택사항)
                  </p>
                </li>
                <li className="hImg scAct">
                  <h3>무료 샘플 서비스</h3>
                  <p>
                    시향지가 아닌 직접 착향 할 수 있는
                    <br />
                    향수 원액 샘플을 신청 할 수 있습니다.
                  </p>
                  <p className="small">
                    ※ 좌측 상단 SHOP → 최하단 옵션 SAMPLE KIT 클릭
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default MemberShip;
