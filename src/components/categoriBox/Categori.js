import React from "react";
import { 
  CategoriListBox,
  CategoriImgTextBox,
  CategoriImg,
  CategoriText
 } from "./Categori.styled";

 import {
  glassCategori_1,
  glassCategori_2,
  glassCategori_3,
  glassCategori_4,
  glassCategori_5,
  glassCategori_6,
  glassCategori_7,
  glassCategori_8
 }from '../../static/image/image';

const Categori = () => {

  return(
    <CategoriListBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_1}></CategoriImg>
        <CategoriText>전체보기</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_2}></CategoriImg>
        <CategoriText>틴트 렌즈</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_3}></CategoriImg>
        <CategoriText>베스트 셀러</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_4}></CategoriImg>
        <CategoriText>블루라이트 차단</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_5}></CategoriImg>
        <CategoriText>선물추천</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_6}></CategoriImg>
        <CategoriText>클래식 디자인</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_7}></CategoriImg>
        <CategoriText>사각 프레임</CategoriText>
      </CategoriImgTextBox>
      <CategoriImgTextBox>
        <CategoriImg src={glassCategori_8}></CategoriImg>
        <CategoriText>원형 프레임</CategoriText>
      </CategoriImgTextBox>
    </CategoriListBox>
    
  )
};

export default Categori