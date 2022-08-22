import Card from '../../components/card/Card';
import Card2 from '../../components/card/Card2';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Categori from '../../components/categoriBox/Categori';
import {BsFillMenuButtonWideFill} from 'react-icons/bs';

import {
  GlassFull,
  CategoriListFullbox,
  ContentTop,
  ContentTopTitle,
  ContentTopBtnBox,
} from './Glass.styled';

const Glass = () => {
  return (
    <>
      <Header />
      <CategoriListFullbox>
        <Categori></Categori>
      </CategoriListFullbox>
      <ContentTop>
        <ContentTopTitle>안경 / 전체보기</ContentTopTitle>
        <ContentTopBtnBox>
          <button>간략보기</button>
          <button>필터</button>
        </ContentTopBtnBox>
      </ContentTop>
      <GlassFull>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </GlassFull>
      <Footer />
    </>
  );
};

export default Glass;
