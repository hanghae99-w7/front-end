import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { SunglassCategori2 } from '../../components/categoriBox/Categori';
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
} from './Sunglass.styled';

const Sunglass = () => {
  return (
    <>
      <Header />
      <CategoriListFullbox>
        <SunglassCategori2></SunglassCategori2>
      </CategoriListFullbox>
      <ContentTop>
        <ContentTopTitle>선글라스 / 전체보기</ContentTopTitle>
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

export default Sunglass;
