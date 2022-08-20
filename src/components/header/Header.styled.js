import styled from 'styled-components';

// HeaderBox Large
export const HeaderBoxLarge = styled.div`
  box-sizing: border-box;
  font-family: AppleSDGothicNeoM;
  font-size: 12px;
  background-color: white;
  color: ${(props) => props.color};
  width: 100%;
  height: auto;
`;
export const HeaderBoxLargeContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
`;
export const HeaderBoxLargeInner = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding: 0 20px;
`;
export const HeaderBoxLargeLogo = styled.div`
  box-sizing: border-box;
  width: 202.5px;
  height: auto;
  margin: 26.2px 0;
  transition: opacity 0.6s ease;
  float: left;
  svg {
    width: auto;
    height: 19.35;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxLargeNav = styled.div`
  left: 50%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  transform: translateX(-50%);
  width: 55%;
  height: 100%;
  text-align: center;
`;
export const HeaderBoxLargeUl = styled.ul`
  list-style: none;
  font-size: 0;
`;
export const HeaderBoxLargeLi = styled.li`
  margin: 0 15px;
  display: inline-block;
  vertical-align: top;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxLargeLiSpan = styled.span`
  color: #000;
  font-size: 13px;
  line-height: 72px;
`;
export const HeaderBoxLargeRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  float: right;
  width: 180px;
`;
export const HeaderBoxLargeCountry = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  margin: 28px 0;
  width: auto;
`;
export const HeaderBoxLargeSignIn = styled.div`
  box-sizing: border-box;
  font-size: 15px;
  margin: 28px 0;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxLargeBasket = styled.div`
  box-sizing: border-box;
  font-size: 25px;
  margin: 21px 0;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

// HeaderBox Small
export const HeaderBoxSmall = styled.div`
  box-sizing: border-box;
  font-family: AppleSDGothicNeoM;
  font-size: 12px;
  background-color: white;
  color: ${(props) => props.color};
  width: 100%;
  height: auto;
`;
export const HeaderBoxSmallContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
`;
export const HeaderBoxSmallInner = styled.div`
  box-sizing: border-box;
  position: relative;
  padding: 0 20px;
  overflow: hidden;
`;
export const HeaderBoxSmallLogo = styled.div`
  width: 156.594px;
  margin: 22.5px 0;
  height: 15px;
  float: left;
  transition: opacity 0.6s ease;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxSmallRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  float: right;
  width: 70px;
  height: auto;
`;
export const HeaderBoxSmallBasket = styled.div`
  box-sizing: border-box;
  font-size: 25px;
  margin: 13px 0;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;
export const HeaderBoxSmallMenu = styled.div`
  box-sizing: border-box;
  font-size: 20px;
  margin: 16px 0;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

// Aside bar
export const AsideBar = styled.div`
  position: fixed;
  z-index: 99999;
  max-width: 385px;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  transform: translateX(100%);
  transition: transform 0.6s ease;
`;
export const AsideBarCancel = styled.div`
  position: fixed;
  top: 22px;
  right: 22px;
  font-size: 20px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`;
export const AsieBarInner = styled.div`
  overflow-x: auto;
  height: 100%;
  padding: 60px 40px 40px;
  box-sizing: border-box;
`;
export const AsideBarContentFirst = styled.div`
  box-sizing: border-box;
  word-break: keep-all;
`;
export const AsideBarContentUlFirst = styled.ul``;
export const AsideBarContentLiFirst = styled.li`
  font-family: AppleSDGothicNeoB;
  line-height: 47px;
  font-size: 24px;
`;
export const AsideBarContentSecond = styled.div`
  margin-top: 30px;
  box-sizing: border-box;
  word-break: keep-all;
`;
export const AsideBarContentUlSecond = styled.ul``;
export const AsideBarContentLiSecond = styled.li`
  font-family: AppleSDGothicNeoB;
  line-height: 37px;
  font-size: 17px;
`;
export const AsideBarFooter = styled.div`
  position: absolute;
  bottom: 45px;
  left: 40px;
`;
export const AsideBarFooterUl = styled.ul``;
export const AsideBarFooterLi = styled.li`
  font-family: AppleSDGothicNeoB;
  line-height: 29px;
  font-size: 13px;
`;

// Aside background
export const AsideBackground = styled.div`
  position: fixed;
  z-index: 111;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.6s ease, visibility 0.6s ease;
`;


// Basket
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
