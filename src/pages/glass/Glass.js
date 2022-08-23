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
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const items = useSelector((state) => state.item.item);
  const is_loaded = useSelector((state) => state.item.is_loaded);
  console.log(items)

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
    dispatch(getItemThunk({ page, orderby: 'id', category: 'glasses' }));
  }, [page]);



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
            {items.data.map((item) => {
              return <Card 
              key={item.itemId} 
              detail={item.detailPageUrl} 
              price={item.price} 
              name = {item.productName} 
              imgUrl={item.imgUrl}/>;
            })}
          </Fragment>
        ) : (
          <CardSkeleton/>
        )}
      </GlassFull>
      <Footer />
    </>
  );
};

export default Glass;
