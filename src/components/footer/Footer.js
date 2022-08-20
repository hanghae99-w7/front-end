import { useRef, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import {
  SmallFooterBox,
  SmallFooterNav,
  SmallFooterSection,
  SmallFooterTitle,
  SmallFooterGroup,
  SmallFooterItems,
  SmallFooterItem,
  SmallCopyright,
  LargeFooterBox,
  LargeFooterNav,
  LargeFooterSection,
  LargeFooterTitle,
  LargeFooterGroup,
  LargeFooterItems,
  LargeFooterItem,
  LargeCopyright,
} from './Footer.styled';

const Footer = () => {
  const [service, setService] = useState(true);
  const [law, setLaw] = useState(true);
  const [social, setSocial] = useState(true);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 770px)',
  });

  const serviceRef = useRef();
  const lawRef = useRef();
  const socialRef = useRef();

  const hideService = () => {
    if (service) {
      serviceRef.current.style.display = 'none';
      setService(false);
    } else {
      serviceRef.current.style.display = 'block';
      setService(true);
    }
  };

  const hideLaw = () => {
    if (law) {
      lawRef.current.style.display = 'none';
      setLaw(false);
    } else {
      lawRef.current.style.display = 'block';
      setLaw(true);
    }
  };

  const hideSocial = () => {
    if (social) {
      socialRef.current.style.display = 'none';
      setSocial(false);
    } else {
      socialRef.current.style.display = 'block';
      setSocial(true);
    }
  };

  return (
    <div>
      {isSmallScreen ? (
        <SmallFooterBox>
          <SmallFooterNav>
            <SmallFooterSection>
              <SmallFooterTitle>
                <button>
                  <Link to="/">고객서비스</Link>
                  <span onClick={hideService}>{service ? '-' : '+'}</span>
                </button>
              </SmallFooterTitle>
              <SmallFooterGroup ref={serviceRef}>
                <SmallFooterItems>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">문의</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">배송</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">서비스</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">교환 및 반품</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">주문취소</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">주문조회</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">수리서비스 가이드</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">제품 사용 가이드</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">제품 등록</Link>
                    </div>
                  </SmallFooterItem>
                </SmallFooterItems>
              </SmallFooterGroup>
            </SmallFooterSection>

            <SmallFooterSection>
              <SmallFooterTitle>
                <button>
                  <Link to="/">법적 고지</Link>
                  <span onClick={hideLaw}>{law ? '-' : '+'}</span>
                </button>
              </SmallFooterTitle>
              <SmallFooterGroup ref={lawRef}>
                <SmallFooterItems>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">이용약관</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">개인정보처리방침</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">쿠키 정책</Link>
                    </div>
                  </SmallFooterItem>
                </SmallFooterItems>
              </SmallFooterGroup>
            </SmallFooterSection>

            <SmallFooterSection>
              <SmallFooterTitle>
                <button>
                  <Link to="/">소셜 미디어</Link>
                  <span onClick={hideSocial}>{social ? '-' : '+'}</span>
                </button>
              </SmallFooterTitle>
              <SmallFooterGroup ref={socialRef}>
                <SmallFooterItems>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">페이스북</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">인스타그램</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">유튜브</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">트위터</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">카카오톡</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">핀터레스트</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">위쳇</Link>
                    </div>
                  </SmallFooterItem>
                  <SmallFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">웨이보</Link>
                    </div>
                  </SmallFooterItem>
                </SmallFooterItems>
              </SmallFooterGroup>
            </SmallFooterSection>
          </SmallFooterNav>

          <SmallCopyright></SmallCopyright>
        </SmallFooterBox>
      ) : (
        <LargeFooterBox>
          <LargeFooterNav>
            <LargeFooterSection>
              <LargeFooterTitle>
                <button>
                  <Link to="/">고객서비스</Link>
                </button>
              </LargeFooterTitle>
              <LargeFooterGroup>
                <LargeFooterItems>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">문의</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">배송</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">서비스</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">교환 및 반품</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">주문취소</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">주문조회</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">수리서비스 가이드</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">제품 사용 가이드</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">제품 등록</Link>
                    </div>
                  </LargeFooterItem>
                </LargeFooterItems>
              </LargeFooterGroup>
            </LargeFooterSection>

            <LargeFooterSection>
              <LargeFooterTitle>
                <button>
                  <Link to="/">법적 고지</Link>
                </button>
              </LargeFooterTitle>
              <LargeFooterGroup>
                <LargeFooterItems>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">이용약관</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">개인정보처리방침</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">쿠키 정책</Link>
                    </div>
                  </LargeFooterItem>
                </LargeFooterItems>
              </LargeFooterGroup>
            </LargeFooterSection>

            <LargeFooterSection>
              <LargeFooterTitle>
                <button>
                  <Link to="/">소셜 미디어</Link>
                </button>
              </LargeFooterTitle>
              <LargeFooterGroup>
                <LargeFooterItems>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">페이스북</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">인스타그램</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">유튜브</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">트위터</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">카카오톡</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">핀터레스트</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">위쳇</Link>
                    </div>
                  </LargeFooterItem>
                  <LargeFooterItem>
                    <div className="footer_item_link">
                      <Link to="/">웨이보</Link>
                    </div>
                  </LargeFooterItem>
                </LargeFooterItems>
              </LargeFooterGroup>
            </LargeFooterSection>
          </LargeFooterNav>
          <LargeCopyright>© 2022 GENTLE MONSTER</LargeCopyright>
        </LargeFooterBox>
      )}
    </div>
  );
};

export default Footer;
