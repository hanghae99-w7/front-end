// Import React
import { Fragment, useRef } from 'react';

// Import packages
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { BsXLg } from 'react-icons/bs';

// Import components & elements
import Button from '../../elements/button/Button';

// Import style
import {
  HeaderBoxLarge,
  HeaderBoxLargeContainer,
  HeaderBoxLargeInner,
  HeaderBoxLargeLogo,
  HeaderBoxLargeNav,
  HeaderBoxLargeUl,
  HeaderBoxLargeLi,
  HeaderBoxLargeLiSpan,
  HeaderBoxLargeRight,
  HeaderBoxLargeCountry,
  HeaderBoxLargeSignIn,
  HeaderBoxLargeBasket,
  HeaderBoxSmall,
  HeaderBoxSmallContainer,
  HeaderBoxSmallInner,
  HeaderBoxSmallLogo,
  HeaderBoxSmallRight,
  HeaderBoxSmallBasket,
  HeaderBoxSmallMenu,
  AsideBar,
  AsideBarCancel,
  AsieBarInner,
  AsideBarContentFirst,
  AsideBarContentUlFirst,
  AsideBarContentLiFirst,
  AsideBarContentSecond,
  AsideBarContentUlSecond,
  AsideBarContentLiSecond,
  AsideBarFooter,
  AsideBarFooterUl,
  AsideBarFooterLi,
  AsideBackground,
} from './Header.styled';
import { theme } from '../../shared/theme';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  const asideBarRef = useRef();
  const asideBackRef = useRef();
  const asideBasketRef = useRef();

  const showAsideBar = () => {
    asideBarRef.current.style.transform = 'translateX(0)';
    asideBackRef.current.style.visibility = 'visible';
    asideBackRef.current.style.opacity = '0.38';
  };
  const hideAsideBar = () => {
    asideBarRef.current.style.transform = 'translateX(100%)';
    asideBackRef.current.style.visibility = 'hidden';
    asideBackRef.current.style.opacity = '0';
  };

  const showBasketBar = () => {
    asideBasketRef.current.style.transform = 'translateX(0)';
    asideBackRef.current.style.visibility = 'visible';
    asideBackRef.current.style.opacity = '0.38';
  };

  const hideBasketBar = () => {
    asideBasketRef.current.style.transform = 'translateX(100%)';
    asideBackRef.current.style.visibility = 'hidden';
    asideBackRef.current.style.opacity = '0';
  };

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  return (
    <Fragment>
      {isSmallScreen ? (
        <Fragment>
          <HeaderBoxSmall color={theme.quaternaryColor}>
            <HeaderBoxSmallContainer>
              <HeaderBoxSmallInner>
                <HeaderBoxSmallLogo>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 166 15.9"
                  >
                    <path d="M7.3 5.3V4.1c0-1.3-.6-1.9-2.1-1.9-1.6 0-2.2.6-2.2 1.9v7.7c0 1.3.5 1.9 2.1 1.9 1.5 0 2.2-1 2.2-2.5V9.4H4.8V7.2h5.5v8.5H7.7v-1.2c-.5.7-1.4 1.5-3.5 1.5C1.5 16 0 14.9 0 11.3V4.8C0 1.3 2.1 0 5.2 0c3 0 5.1 1.4 5.1 4.1v1.2h-3zm14.9-5v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zm13.5 0v15.3H32L28 3.9v11.7h-3V.3h3.7l4 11.6V.3h3zm12.5 0v2.3h-3.8v13.1h-3V2.6h-3.8V.3h10.6zm4.9 13.1H59v2.3h-8.9V.3h3v13.1zM69.9.3v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zM91 .3v15.3h-3V3.9l-2.6 11.8H83L80.5 3.8v11.9h-3V.3h4.2L84.2 12 86.7.3H91zM104.1 5v5.9c0 3.7-1.8 5-5.1 5s-5.1-1.2-5.1-5V5c0-3.7 1.8-5 5.1-5s5.1 1.3 5.1 5zm-3-.7c0-1.6-.6-2.1-2.1-2.1-1.6 0-2.1.5-2.1 2.1v7.4c0 1.6.6 2 2.1 2 1.6 0 2.1-.5 2.1-2V4.3zm16.7-4v15.3h-3.7l-4-11.7v11.7h-3V.3h3.7l4 11.6V.3h3zm12.3 3.6v.9h-3V4c0-1.3-.2-1.8-1.7-1.8-1.4 0-1.7.6-1.7 1.6 0 .9.2 1.3 1 1.8l2.9 1.9c1.6 1 2.5 1.6 2.5 4.4 0 2.7-1.8 4-4.7 4-3.5 0-4.9-1.2-4.9-4v-1.3h3v1.1c0 1.6.5 2 1.9 2s1.7-.6 1.7-1.7-.2-1.5-1.2-2.2L123 7.9c-1.8-1.2-2.4-1.8-2.4-4 0-1.9 1.1-3.8 4.7-3.8 3.7-.1 4.8 1.5 4.8 3.8M142.2.3v2.3h-3.8v13.1h-3V2.6h-3.8V.3h10.6zm10.9 0v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zm12.4 10.2v3.3c0 .8.2 1.5.6 1.9H163c-.3-.4-.5-1.1-.5-1.9v-3.3c0-1.2-.5-1.6-1.6-1.6h-2.1v6.8h-3V.3h5.5c4 0 4.5 2.2 4.5 4.3 0 1.7-.9 2.9-3.1 3.3 1.9.1 2.8 1.1 2.8 2.6zm-4.6-3.9c1.6 0 1.9-.7 1.9-2s-.2-2-1.9-2h-2.1v4h2.1z"></path>
                  </svg>
                </HeaderBoxSmallLogo>
                <HeaderBoxSmallRight>
                  <HeaderBoxSmallBasket onClick={showBasketBar}>
                    <BiLockAlt></BiLockAlt>
                  </HeaderBoxSmallBasket>
                  <HeaderBoxSmallMenu onClick={showAsideBar}>
                    <AiOutlineMenu></AiOutlineMenu>
                  </HeaderBoxSmallMenu>
                </HeaderBoxSmallRight>
              </HeaderBoxSmallInner>
            </HeaderBoxSmallContainer>
          </HeaderBoxSmall>
          <AsideBar ref={asideBarRef}>
            <AsideBarCancel onClick={hideAsideBar}>
              <BsXLg></BsXLg>
            </AsideBarCancel>
            <AsieBarInner>
              <AsideBarContentFirst>
                <AsideBarContentUlFirst>
                  <AsideBarContentLiFirst onClick={() => navigate('/sunglass')}>
                    선글라스
                  </AsideBarContentLiFirst>
                  <AsideBarContentLiFirst onClick={() => navigate('/glass')}>
                    안경
                  </AsideBarContentLiFirst>
                  <AsideBarContentLiFirst>콜라보레이션</AsideBarContentLiFirst>
                </AsideBarContentUlFirst>
              </AsideBarContentFirst>
              <AsideBarContentSecond>
                <AsideBarContentUlSecond>
                  <AsideBarContentLiSecond>스타일</AsideBarContentLiSecond>
                  <AsideBarContentLiSecond>브랜드이슈</AsideBarContentLiSecond>
                  <AsideBarContentLiSecond>매장보기</AsideBarContentLiSecond>
                  <AsideBarContentLiSecond onClick={() => navigate('/service')}>
                    문의하기
                  </AsideBarContentLiSecond>
                </AsideBarContentUlSecond>
              </AsideBarContentSecond>
              <AsideBarFooter>
                <AsideBarFooterUl>
                  <AsideBarFooterLi onClick={() => navigate('/signin')}>
                    로그인
                  </AsideBarFooterLi>
                  <AsideBarFooterLi>관심상품</AsideBarFooterLi>
                  <AsideBarFooterLi>Shop in KR</AsideBarFooterLi>
                </AsideBarFooterUl>
              </AsideBarFooter>
            </AsieBarInner>
          </AsideBar>
          <AsideBackground ref={asideBackRef} />
        </Fragment>
      ) : (
        <HeaderBoxLarge color={theme.quaternaryColor}>
          <HeaderBoxLargeContainer>
            <HeaderBoxLargeInner>
              <HeaderBoxLargeLogo onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 15.9">
                  <path d="M7.3 5.3V4.1c0-1.3-.6-1.9-2.1-1.9-1.6 0-2.2.6-2.2 1.9v7.7c0 1.3.5 1.9 2.1 1.9 1.5 0 2.2-1 2.2-2.5V9.4H4.8V7.2h5.5v8.5H7.7v-1.2c-.5.7-1.4 1.5-3.5 1.5C1.5 16 0 14.9 0 11.3V4.8C0 1.3 2.1 0 5.2 0c3 0 5.1 1.4 5.1 4.1v1.2h-3zm14.9-5v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zm13.5 0v15.3H32L28 3.9v11.7h-3V.3h3.7l4 11.6V.3h3zm12.5 0v2.3h-3.8v13.1h-3V2.6h-3.8V.3h10.6zm4.9 13.1H59v2.3h-8.9V.3h3v13.1zM69.9.3v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zM91 .3v15.3h-3V3.9l-2.6 11.8H83L80.5 3.8v11.9h-3V.3h4.2L84.2 12 86.7.3H91zM104.1 5v5.9c0 3.7-1.8 5-5.1 5s-5.1-1.2-5.1-5V5c0-3.7 1.8-5 5.1-5s5.1 1.3 5.1 5zm-3-.7c0-1.6-.6-2.1-2.1-2.1-1.6 0-2.1.5-2.1 2.1v7.4c0 1.6.6 2 2.1 2 1.6 0 2.1-.5 2.1-2V4.3zm16.7-4v15.3h-3.7l-4-11.7v11.7h-3V.3h3.7l4 11.6V.3h3zm12.3 3.6v.9h-3V4c0-1.3-.2-1.8-1.7-1.8-1.4 0-1.7.6-1.7 1.6 0 .9.2 1.3 1 1.8l2.9 1.9c1.6 1 2.5 1.6 2.5 4.4 0 2.7-1.8 4-4.7 4-3.5 0-4.9-1.2-4.9-4v-1.3h3v1.1c0 1.6.5 2 1.9 2s1.7-.6 1.7-1.7-.2-1.5-1.2-2.2L123 7.9c-1.8-1.2-2.4-1.8-2.4-4 0-1.9 1.1-3.8 4.7-3.8 3.7-.1 4.8 1.5 4.8 3.8M142.2.3v2.3h-3.8v13.1h-3V2.6h-3.8V.3h10.6zm10.9 0v2.3h-6v3.9h5.4v2.2h-5.4v4.7h6v2.3h-9V.3h9zm12.4 10.2v3.3c0 .8.2 1.5.6 1.9H163c-.3-.4-.5-1.1-.5-1.9v-3.3c0-1.2-.5-1.6-1.6-1.6h-2.1v6.8h-3V.3h5.5c4 0 4.5 2.2 4.5 4.3 0 1.7-.9 2.9-3.1 3.3 1.9.1 2.8 1.1 2.8 2.6zm-4.6-3.9c1.6 0 1.9-.7 1.9-2s-.2-2-1.9-2h-2.1v4h2.1z"></path>
                </svg>
              </HeaderBoxLargeLogo>
              <HeaderBoxLargeNav>
                <HeaderBoxLargeUl>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan onClick={() => navigate('/sunglass')}>
                      선글라스
                    </HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan onClick={() => navigate('/glass')}>
                      안경
                    </HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan>콜라보레이션</HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan>스타일</HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan>브랜드이슈</HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi>
                    <HeaderBoxLargeLiSpan>매장보기</HeaderBoxLargeLiSpan>
                  </HeaderBoxLargeLi>
                  <HeaderBoxLargeLi onClick={() => navigate('/service')}>
                    <>문의하기</>
                  </HeaderBoxLargeLi>
                </HeaderBoxLargeUl>
              </HeaderBoxLargeNav>
              <HeaderBoxLargeRight>
                <HeaderBoxLargeCountry>Shop in KR</HeaderBoxLargeCountry>
                <HeaderBoxLargeSignIn onClick={() => navigate('/signin')}>
                  로그인
                </HeaderBoxLargeSignIn>
                <HeaderBoxLargeBasket onClick={showBasketBar}>
                  <BiLockAlt></BiLockAlt>
                </HeaderBoxLargeBasket>
              </HeaderBoxLargeRight>
            </HeaderBoxLargeInner>
          </HeaderBoxLargeContainer>
        </HeaderBoxLarge>
      )}
      <HeaderBasket ref={asideBasketRef}>
        <HeaderBasketCancel onClick={hideBasketBar}>
          <BsXLg></BsXLg>
        </HeaderBasketCancel>
        <HeaderBasketInner>
          <HeaderBasketTitle>쇼핑백</HeaderBasketTitle>
          <HeaderBasketForm>
            <HeaderBasketCartGroup>
              쇼핑백에 담긴 제품이 없습니다.
            </HeaderBasketCartGroup>
          </HeaderBasketForm>
          <HeaderBasketTotalGroup>
            <HeaderBasketTotalShipping>
              <HeaderBasketTotalObj>
                <HeaderBasketTotalSpan>배송비</HeaderBasketTotalSpan>
                <HeaderBasketTotalSpan>무료</HeaderBasketTotalSpan>
              </HeaderBasketTotalObj>
            </HeaderBasketTotalShipping>
            <HeaderBasketTotalTotal>
              <HeaderBasketTotalObj>
                <HeaderBasketTotalSpan>합계</HeaderBasketTotalSpan>
                <HeaderBasketTotalSpan>0원</HeaderBasketTotalSpan>
              </HeaderBasketTotalObj>
            </HeaderBasketTotalTotal>
          </HeaderBasketTotalGroup>
          <HeaderBasketButtonGroup>
            <Button
              text={'결제하기'}
              style={{
                bg_color: theme.tertiaryColor,
                ft_size: '12px',
                bd_color: theme.tertiaryColor,
                width: '100%',
                height: '40px',
                pd_bottom: '2px',
                color: '#fff',
              }}
            ></Button>
          </HeaderBasketButtonGroup>
        </HeaderBasketInner>
      </HeaderBasket>
    </Fragment>
  );
};

export default Header;

export const HeaderBasket = styled.div`
  position: fixed;
  z-index: 99999;
  max-width: 327px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  transform: translateX(100%);
  transition: transform 0.6s ease;
`;
export const HeaderBasketCancel = styled.div`
  position: fixed;
  top: 22px;
  right: 22px;
  font-size: 14px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBasketInner = styled.div`
  box-sizing: border-box;
  padding: 22px 16px;
`;
export const HeaderBasketTitle = styled.p`
  font-size: 14px;
  margin-bottom: 36px;
  font-weight: 700;
`;
export const HeaderBasketForm = styled.form`
  height: calc(100vh - 286px);
  min-height: calc(100vh - 286px);
  margin-bottom: 36px;
  font-size: 13px;
`;
export const HeaderBasketCartGroup = styled.div`
  box-sizing: border-box;
  display: flex;
`;
export const HeaderBasketTotalGroup = styled.div`
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  padding-top: 14px;
  padding-bottom: 8px;
  background-color: #fff;
  left: 16px;
  right: 16px;
`;
export const HeaderBasketTotalShipping = styled.div`
  box-sizing: border-box;
  word-break: keep-all;
  background-color: transparent;
`;
export const HeaderBasketTotalTotal = styled.div`
  box-sizing: border-box;
  word-break: keep-all;
  background-color: transparent;
`;
export const HeaderBasketTotalObj = styled.div`
  box-sizing: border-box;
  padding: 4px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const HeaderBasketTotalSpan = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.92;
  word-break: keep-all;
`;

export const HeaderBasketButtonGroup = styled.div`
  box-sizing: border-box;
  margin-top: 28px;
  left: 16px;
  right: 16px;
`;
