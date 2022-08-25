import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Categori from '../../components/categoriBox/Categori';
import { getItemThunk, clearGlassItem } from '../../redux/modules/item';
import { BiSlider} from 'react-icons/bi';
import {IoMdApps} from 'react-icons/io';
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
  FilterBox,
  FilterList,
} from './Glass.styled';
import { Fragment, useEffect } from 'react';

const Glass = () => {
  const dispatch = useDispatch();
  const [orderby,setOrderby] = useState('id');
  const [page, setPage] = useState(0);
  const items = useSelector((state) => state.item.item_glasses);
  const is_loaded = useSelector((state) => state.item.is_loaded);
  const [differentView, setDifferentView] = useState(true);
  const [filter, setFilter] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getItemThunk({ page, orderby: orderby, category: 'glasses' }));
  }, [page, orderby]);

  const viewChange = () => {
    setDifferentView(!differentView);
  };

  const filterOnOff = () => {
    setFilter(!filter);
  };

  const newProduct = () => {
    setFilter(!filter);
    dispatch(clearGlassItem());
    setPage(0);
    setOrderby('id');
  };

  const highPrice = () => {
    setFilter(!filter);
    dispatch(clearGlassItem());
    setPage(0);
    setOrderby('priceup');
  };

  const lowPrice = () => {
    setFilter(!filter);
    dispatch(clearGlassItem());
    setPage(0);
    setOrderby('pricedown');
  };

  return (
    <>
      <Header />
      <CategoriListFullbox>
        <Categori></Categori>
      </CategoriListFullbox>
      <ContentTop>
        <ContentTopTitle>안경 / 전체보기</ContentTopTitle>
        <ContentTopIconsbox onClick={viewChange}>
          <IoMdApps style={{ fontSize: '17px' }} />
          간략보기
        </ContentTopIconsbox>
        &nbsp;
        <ContentTopIconsbox2 onClick={filterOnOff}>
          <BiSlider style={{ fontSize: '17px' }} /> 필터
        </ContentTopIconsbox2>
      </ContentTop>
      {filter === true ? (
        <FilterBox>
          <FilterList onClick={newProduct}>신상품 순</FilterList>
          <FilterList onClick={highPrice}>높은 가격순</FilterList>
          <FilterList onClick={lowPrice}>낮은 가격순</FilterList>
        </FilterBox>
      ) : (
        <FilterBox style={{ display: 'none' }} />
      )}
      <GlassFull>
        {is_loaded ? (
          <Fragment>
            {items.map((item) => {
              return (
                <Card
                  key={item.itemId}
                  id={item.itemId}
                  price={item.price}
                  name={item.productName}
                  imgUrl={item.imgUrl}
                  cardView={differentView}
                />
              );
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
