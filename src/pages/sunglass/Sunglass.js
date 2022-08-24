import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { SunglassCategori2 } from '../../components/categoriBox/Categori';
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
  FilterBoxSunglass,
  FilterList,
} from './Sunglass.styled';
import { Fragment, useEffect } from 'react';

const Glass = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const items = useSelector((state) => state.item.item_sunglasses);
  const is_loaded = useSelector((state) => state.item.is_loaded);
  const [differentView, setDifferentView] = useState(true);
  const [filter, setFilter] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log('페이지 끝에 스크롤이 닿았음');
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
    dispatch(getItemThunk({ page, orderby: 'id', category: 'sunglasses' }));
  }, [page]);

  const viewChange = () => {
    setDifferentView(!differentView);
  };

  const filterOnOff = () => {
    setFilter(!filter);
  };

  const newProduct = () => {
    setFilter(!filter);
  };

  const highPrice = () => {
    setFilter(!filter);
  };

  const lowPrice = () => {
    setFilter(!filter);
  };

  return (
    <>
      <Header />
      <CategoriListFullbox>
        <SunglassCategori2 />
      </CategoriListFullbox>
      <ContentTop>
        <ContentTopTitle>선글라스 / 전체보기</ContentTopTitle>
        <ContentTopIconsbox onClick={viewChange}>
          <BsFillGrid3X3GapFill style={{ fontSize: '17px' }} /> 간략보기
        </ContentTopIconsbox>
        &nbsp;
        <ContentTopIconsbox2 onClick={filterOnOff}>
          <BsFilter style={{ fontSize: '18px' }} /> 필터
        </ContentTopIconsbox2>
      </ContentTop>
      {filter === true ? (
        <FilterBoxSunglass>
          <FilterList onClick={newProduct}>신상품 순</FilterList>
          <FilterList onClick={highPrice}>높은 가격순</FilterList>
          <FilterList onClick={lowPrice}>낮은 가격순</FilterList>
        </FilterBoxSunglass>
      ) : (
        <FilterBoxSunglass style={{ display: 'none' }} />
      )}
      <GlassFull>
        {is_loaded ? (
          <Fragment>
            {items.map((item) => {
              return (
                <Card
                  key={item.itemId}
                  id={item.itemId}
                  detail={item.detailPageUrl}
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
