import styled from "styled-components";

export const DetailBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;
export const DetailBoxWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  min-width: 480px;
  width: 70%;
  height: auto;
`;
export const DetailImgGroup = styled.div`
  box-sizing: border-box;
  width: 50%;
  min-width: 480px;
  height: auto;
`;
export const DetailImg = styled.img`
  width: 100%;
  height: auto;
`;
export const DetailTextGroup = styled.div`
  font-family: AppleSDGothicNeoM;
  box-sizing: border-box;
  width: 453px;
  height: auto;
`;
export const DetailTextTitlePrice = styled.div`
  box-sizing: border-box;
  padding: 36px 0 30px;
`;
export const DetailTextTitle = styled.div`
  font-weight: 600;
  box-sizing: border-box;
  font-size: 20px;
  margin-bottom: 8px;
`;
export const DetailTextPrice = styled.div`
  box-sizing: border-box;
  font-size: 15px;
`;
export const DetailTextContent = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 37px;
`;
export const DetailButtonGroup = styled.div`
  box-sizing: border-box;
  padding: 2px 0 24px;
`;
export const DetailServiceInfo = styled.div`
  box-sizing: border-box;
  margin-bottom: 39px;
  font-size: 11px;
`;
export const DetailServiceInfoA = styled.a`
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
export const DetailInfo = styled.div`
  box-sizing: border-box;
  :last-child {
    border-bottom: 1px solid #c0c0c0;
  }
`;
export const DetailInfoBoxTop = styled.div`
  border-top: 1px solid #c0c0c0;
  position: relative;
  background-color: transparent;
`;
export const DetailInfoBoxText = styled.div`
  font-size: 13px;
  text-indent: 8px;
  line-height: 64px;
  height: 64px;
  cursor: pointer;
`;
export const DetailInfoBoxIcon = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 24px;
  right: 14px;
`;
export const DetailInfoBoxContentBox = styled.div`
  display: none;
  box-sizing: border-box;
  padding: 10px 30px 18px 8px;
`;
export const DetailInfoBoxContent = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  line-height: 26px;
  letter-spacing: -0.101px;
`;
export const DetailInfoBoxContentImg = styled.img`
  width: 402px;
  height: 502.5px;
`;
