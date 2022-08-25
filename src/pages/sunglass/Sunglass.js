import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { SunglassCategori2 } from '../../components/categoriBox/Categori';
import { getItemThunk, clearSunglassItem } from '../../redux/modules/item';
import { BiSlider} from 'react-icons/bi';
import {IoMdApps} from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { throttle } from 'lodash';
import { useCallback, useState } from 'react';
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
  IconOne,
  IconTwo
} from './Sunglass.styled';
import { Fragment, useEffect } from 'react';

const Glass = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [orderby, setOrderby] = useState('id');
  const items = useSelector((state) => state.item.item_sunglasses);
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
    dispatch(getItemThunk({ page, orderby: orderby, category: 'sunglasses' }));
  }, [page, orderby]);

  const viewChange = () => {
    setDifferentView(!differentView);
  };

  const filterOnOff = () => {
    setFilter(!filter);
  };

  const newProduct = () => {
    if (orderby === 'id') {
      alert('현재 선택된 정렬입니다');
      setFilter(!filter);
    } else {
      setFilter(!filter);
      dispatch(clearSunglassItem());
      setPage(0);
      setOrderby('id');
    }
  };

  const highPrice = () => {
    if (orderby === 'priceup') {
      alert('현재 선택된 정렬입니다');
      setFilter(!filter);
    } else {
      setFilter(!filter);
      dispatch(clearSunglassItem());
      setPage(0);
      setOrderby('priceup');
    }
  };

  const lowPrice = () => {
    if (orderby === 'pricedown') {
      alert('현재 선택된 정렬입니다');
      setFilter(!filter);
    } else {
      setFilter(!filter);
      dispatch(clearSunglassItem());
      setPage(0);
      setOrderby('pricedown');
    }
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
          <IconOne><IoMdApps style={{ fontSize: '18px' }} /></IconOne> 간략보기
        </ContentTopIconsbox>
        &nbsp;
        <ContentTopIconsbox2 onClick={filterOnOff}>
        <IconTwo><BiSlider style={{ fontSize: '17px' }} /></IconTwo> 필터
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
