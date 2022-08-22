import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Categori from '../../components/categoriBox/Categori';
import {
  BsFilter,
  BsFillGrid3X3GapFill,
} from 'react-icons/bs';

import {
  GlassFull,
  CategoriListFullbox,
  ContentTop,
  ContentTopTitle,
  ContentTopIconsbox,
  ContentTopIconsbox2
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
          <ContentTopIconsbox><BsFillGrid3X3GapFill style={{fontSize:'17px'}}/> 간략보기</ContentTopIconsbox>
           &nbsp;
          <ContentTopIconsbox2><BsFilter style={{fontSize:'18px'}}/> 필터</ContentTopIconsbox2>
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
        <Card />
        <Card />
        <Card />
        <Card />
      </GlassFull>
      <Footer />
    </>
  );
};

export default Glass;
