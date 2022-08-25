import styled from 'styled-components';

export const BasketBox = styled.div`
  position: relative;
  width: 100%;
  height: 108.5px;
  box-sizing: border-box;
`;
export const BasketBoxImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 108.5px;
`;
export const BasketBoxTitle = styled.span`
  position: absolute;
  font-size: 12px;
  left: 100px;
  font-family: AppleSDGothicNeoB;
`;
export const BasketBoxPrice = styled.span`
  position: absolute;
  font-size: 12px;
  top: 30px;
  left: 100px;
  font-family: AppleSDGothicNeoM;
`;
export const BasketBoxDelete = styled.span`
  position: absolute;
  font-family: AppleSDGothicNeoM;
  font-size: 13px;
  right: 0;
  bottom: 0;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
