import styled from 'styled-components';

//한 행에 카드 6개씩 나오는 width
export const CardBox = styled.div`
  width: 362.19px;
  height: 568.75px;
  position: relative;
  font-family: 'AppleSDGothicNeoL';
`;

//한 행에 카드 6개씩 나오는 width
export const CardBox2 = styled.div`
  width: 300.19px;
  height: 568.75px;
  position: relative;
  font-family: 'AppleSDGothicNeoL';
`;

export const CardImg = styled.img`
  width: 362.19px;
  height: 490.75px;
`;

export const CardTextBox = styled.div`
  width: 362.188px;
  height: 64px;
  position: absolute;
  bottom: 0%;
  svg {
    height:1.3em;
    width:1.3em;
    position: absolute;
    top:0%;
    right: 1.5%;
    &:hover {
    cursor: pointer;
  }
  }
`

export const CardItemName = styled.p`
width: 61.5px;
height: 3px;
font-size: 13px;
font-weight: 700;
text-align: left;
margin-top: 3px;
&:hover {
    cursor: pointer;
  }
`

export const CardItemPrice = styled.p`
width: 61.5px;
height: 29px;
font-size: 13px;
&:hover {
    cursor: pointer;
  }
`