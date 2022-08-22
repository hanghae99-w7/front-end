import styled from "styled-components";

export const CategoriListBox = styled.div`
width: 882px;
height: 102.391px;
display: flex ;
align-items: center;
justify-content: center;
font-weight: 600;
font-family: 'AppleSDGothicNeoL';
`; 

export const CategoriImgTextBox = styled.div`
width: 80px;
height: 102.391px;
margin: 0 9px 0 9px;
min-width: 68px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:10px 20px;
& :hover{
  cursor: pointer;
}
`;

export const CategoriImg = styled.img`
width:72px;
height:72px;
border-radius: 50%;
position: relative;
padding: 3px;
${CategoriImgTextBox}:hover &{
  outline: 1px solid black;
}
`;

export const CategoriText = styled.span`
text-align: center;
font-size: 11px;
width: 85px;

`