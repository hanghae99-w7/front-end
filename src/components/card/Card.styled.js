import styled from 'styled-components';

export const CardBox = styled.div`
  width:450px;
  height: 650px;
  position: relative;
  font-family: 'AppleSDGothicNeoL';
`;

export const CardImg = styled.img`
  width: 450px;
  height: 570px;
  :hover {
    cursor: pointer
  };
`;

export const CardTextBox = styled.div`
  width: 449px;
  height: 64px;
  position: absolute;
  bottom: 0%;
  svg {
    height:1.3em;
    width:1.4em;
    position: absolute;
    top:0%;
    right: 1.5%;
    &:hover {
    cursor: pointer;
  }
  }
`;

export const CardItemName = styled.p`
width: 150px;
height: 3px;
font-size: 14px;
font-weight: 600;
text-align: left;
margin-top: 3px;
margin-left: 3px;
&:hover {
    cursor: pointer;
  }
`

export const CardItemPrice = styled.p`
width: 61.5px;
height: 29px;
font-size: 13px;
margin-left: 3px;
&:hover {
    cursor: pointer;
  }
`