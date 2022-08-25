import styled from 'styled-components';

export const GlassFull = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 45px 12px;
`;

export const CategoriListFullbox = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentTop = styled.div`
  width: 100%;
  height: 66px;
  padding: 22px 20px 22px 26px;
  display: flex;
  align-items: center;
`;

export const ContentTopTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 22px;
  font-family: 'AppleSDGothicNeoM';
`;

export const ContentTopIconsbox = styled.div`
  display: flex;
  position: relative;
  width: 80px;
  min-width: 80px;
  height: 22px;
  justify-content: end;
  font-family: 'AppleSDGothicNeoL';

  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentTopIconsbox2 = styled.div`
  display: flex;
  position: relative;
  width: 50px;
  min-width: 50px;
  height: 22px;
  justify-content: end;
  font-family: 'AppleSDGothicNeoL';
  font-size: 13px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const FilterBox = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: white;
  z-index: 999;
  gap: 20px;
  font-weight: 600;
  right: 1.4%;
  border: 3px solid black;
`;

export const FilterList = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const IconOne = styled.div`
  position: absolute;
  top: -3px;
  right: 48px;
`;

export const IconTwo = styled.div`
  position: absolute;
  top: -2.5px;
  right: 28px;
`;
