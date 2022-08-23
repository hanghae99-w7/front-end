import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Categori from '../../components/categoriBox/Categori';
import { getItemThunk } from '../../redux/modules/item';
import { BsFilter, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import CardSkeleton from '../../components/skeleton/CardSkeleton';
import {
  GlassFull,
  CategoriListFullbox,
  ContentTop,
  ContentTopTitle,
  ContentTopIconsbox,
  ContentTopIconsbox2,
} from './Glass.styled';
import { Fragment, useEffect } from 'react';

const Glass = () => {
  const [page, setPage] = useState();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.item.item);
  const is_loaded = useSelector((state) => state.item.is_loaded);

  useEffect(() => {
    dispatch(getItemThunk({ page, orderby: 'id', category: 'glasses' }));
  }, []);

  return (
    <>
      <Header />
      <CategoriListFullbox>
        <Categori></Categori>
      </CategoriListFullbox>
      <ContentTop>
        <ContentTopTitle>안경 / 전체보기</ContentTopTitle>
        <ContentTopIconsbox>
          <BsFillGrid3X3GapFill style={{ fontSize: '17px' }} /> 간략보기
        </ContentTopIconsbox>
        &nbsp;
        <ContentTopIconsbox2>
          <BsFilter style={{ fontSize: '18px' }} /> 필터
        </ContentTopIconsbox2>
      </ContentTop>
      <GlassFull>
        {is_loaded ? (
          <Fragment>
            {items.map((item) => {
              return <Card />;
            })}
          </Fragment>
        ) : (
          <CardSkeleton />
        )}
      </GlassFull>
      <Footer />
    </>
  );
};

export default Glass;
