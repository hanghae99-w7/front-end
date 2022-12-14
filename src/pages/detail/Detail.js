// React
import { useState, useRef, Fragment, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getSingleItemThunk } from '../../redux/modules/item';
import { postBasketThunk, addSelectBasket } from '../../redux/modules/basket';

// Packages
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

// Components & Elements
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';

// Static
import { Package, Placeholder } from '../../static/image/image';

// Style
import {
  DetailBox,
  DetailBoxWrap,
  DetailImgGroup,
  DetailImg,
  DetailTextGroup,
  DetailTextTitlePrice,
  DetailTextTitle,
  DetailTextPrice,
  DetailTextContent,
  DetailButtonGroup,
  DetailServiceInfo,
  DetailServiceInfoA,
  DetailInfo,
  DetailInfoBoxTop,
  DetailInfoBoxText,
  DetailInfoBoxIcon,
  DetailInfoBoxContentBox,
  DetailInfoBoxContent,
  DetailInfoBoxContentImg,
} from './Detail.styled';

const Detail = () => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(true);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(true);
  const [five, setFive] = useState(true);

  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detail_is_loaded = useSelector((state) => state.item.detail_is_loaded);
  const item_single = useSelector((state) => state.item.item_single);

  const changeStatus = (id) => {
    switch (id) {
      case 'one': {
        if (one) {
          oneRef.current.style.display = 'block';
          setOne(false);
          break;
        } else {
          oneRef.current.style.display = 'none';
          setOne(true);
          break;
        }
      }
      case 'two': {
        console.log('two');
        if (two) {
          twoRef.current.style.display = 'block';
          setTwo(false);
          break;
        } else {
          twoRef.current.style.display = 'none';
          setTwo(true);
          break;
        }
      }
      case 'three': {
        if (three) {
          threeRef.current.style.display = 'block';
          setThree(false);
          break;
        } else {
          threeRef.current.style.display = 'none';
          setThree(true);
          break;
        }
      }
      case 'four': {
        if (four) {
          fourRef.current.style.display = 'block';
          setFour(false);
          break;
        } else {
          fourRef.current.style.display = 'none';
          setFour(true);
          break;
        }
      }
      case 'five': {
        if (five) {
          fiveRef.current.style.display = 'block';
          setFive(false);
          break;
        } else {
          fiveRef.current.style.display = 'none';
          setFive(true);
          break;
        }
      }
      default:
        break;
    }
  };

  const addBasket = () => {
    if(window.sessionStorage.length !== 0) {
      dispatch(postBasketThunk(id)).then((res) => {
        if (res.payload.success) {
          alert('??????????????? ?????????????????????');
        }
      });
    }
    else {
      alert('????????? ??? ?????? ???????????????');
      navigate('/signin');
    }
  };

  useEffect(() => {
    dispatch(getSingleItemThunk(id));
  }, []);

  return (
    <Fragment>
      <Header />
      <DetailBox>
        <DetailBoxWrap>
          <DetailImgGroup>
            <DetailImg
              src={detail_is_loaded ? item_single.imgUrl : Placeholder}
            ></DetailImg>
          </DetailImgGroup>
          <DetailTextGroup>
            <DetailTextTitlePrice>
              <DetailTextTitle>
                {detail_is_loaded ? item_single.productName : ''}
              </DetailTextTitle>
              <DetailTextPrice>
                {detail_is_loaded ? item_single.price : ''}
              </DetailTextPrice>
            </DetailTextTitlePrice>
            <DetailTextContent>
              {detail_is_loaded ? item_single.productName : 'GENTLE MONSTER'}???
              ??????????????? ?????? ??????????????? ??????????????????. ??????????????? ?????? ?????????
              ????????? ????????? ????????? ???????????? ???????????? ?????? ???????????? ????????????
              ???????????????. ????????? ????????? ???????????? ????????? ?????? ??????????????? ?????????
              ?????????????????????. ??????????????? ?????? ????????? ????????? ????????? ????????? ??????
              ????????? ???????????? 99.9% UV ????????? ?????? ?????? ????????? ?????????????????????.
            </DetailTextContent>
            <DetailButtonGroup>
              <Button
                type={'button'}
                text={'???????????? ??????'}
                _onClick={addBasket}
                style={{
                  width: '100%',
                  height: '54px',
                  ft_size: '13px',
                  bd_radius: '29px',
                  bg_color: 'black',
                }}
              />
            </DetailButtonGroup>
            <DetailServiceInfo>
              ?????? ?????? ??? ?????? ?????? ?????????,&nbsp;
              <DetailServiceInfoA>????????? ?????? ?????????</DetailServiceInfoA>
            </DetailServiceInfo>
            <DetailInfo>
              <DetailInfoBoxTop onClick={() => changeStatus('one')}>
                <DetailInfoBoxText>?????? ?????? ??????</DetailInfoBoxText>
                <DetailInfoBoxIcon>
                  {one ? (
                    <IoIosArrowDown className="icon"></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp className="icon"></IoIosArrowUp>
                  )}
                </DetailInfoBoxIcon>
              </DetailInfoBoxTop>
              <DetailInfoBoxContentBox ref={oneRef}>
                <DetailInfoBoxContent>
                  ??? ?????? ????????? ?????? ??????
                  <br />
                  ??? ?????? ??? ?????? ?????????
                  <br />
                  ??? ?????? ?????? ??????
                  <br />
                  ??? ????????? ??????: 142.1mm, ?????? ??????: 147.4mm
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;?????? ??????: 47.2mm, ?????? ??????: 42.7mm
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;?????????: 23mm
                  <br />
                  ??? ?????????: ??????
                  <br />
                  ??? ????????? ??? ?????????: IICOMBINED CO.,LTD.
                  <br />
                  ??? ?????????: ??????
                  <br />
                  <DetailServiceInfoA>????????? ????????? ??????</DetailServiceInfoA>
                  <br />
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('two')}>
                <DetailInfoBoxText>?????? ?????? ?????? ?????????</DetailInfoBoxText>
                <DetailInfoBoxIcon>
                  {two ? (
                    <IoIosArrowDown className="icon"></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp className="icon"></IoIosArrowUp>
                  )}
                </DetailInfoBoxIcon>
              </DetailInfoBoxTop>
              <DetailInfoBoxContentBox ref={twoRef}>
                <DetailInfoBoxContent>
                  ??????????????? ?????? ????????? ??????????????? ???????????? ?????? ????????? ??????
                  ?????? ???????????? ????????? ????????????.
                  <br />
                  <br />
                  <DetailInfoBoxContentImg src={Package} />
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('three')}>
                <DetailInfoBoxText>?????? ?????? ?????????</DetailInfoBoxText>
                <DetailInfoBoxIcon>
                  {three ? (
                    <IoIosArrowDown className="icon"></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp className="icon"></IoIosArrowUp>
                  )}
                </DetailInfoBoxIcon>
              </DetailInfoBoxTop>
              <DetailInfoBoxContentBox ref={threeRef}>
                <DetailInfoBoxContent>
                  ??? ??????????????? ??????????????? ?????????????????? ?????? ????????? ?????? ?????? ???
                  ???????????????.
                  <br />
                  <br />
                  <DetailServiceInfoA>???????????????</DetailServiceInfoA>
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('four')}>
                <DetailInfoBoxText>?????? & ??????</DetailInfoBoxText>
                <DetailInfoBoxIcon>
                  {four ? (
                    <IoIosArrowDown className="icon"></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp className="icon"></IoIosArrowUp>
                  )}
                </DetailInfoBoxIcon>
              </DetailInfoBoxTop>
              <DetailInfoBoxContentBox ref={fourRef}>
                <DetailInfoBoxContent>
                  ??? ?????? ??????
                  <br />
                  ?????? ????????? ????????? ????????? ?????? 1-3????????? ???????????????.
                  <br />
                  <br />
                  ??? ?????? ??????
                  <br />
                  ?????? ?????? ???????????? ???????????????. ???????????? ????????? ????????????
                  ???????????? 7??? ????????? ????????? ????????? ?????????. ????????? ???????????? ??????
                  ????????? ???????????? ??????, ?????? ???????????? ???????????? ????????? ?????????.
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('five')}>
                <DetailInfoBoxText>????????? ???????????????????</DetailInfoBoxText>
                <DetailInfoBoxIcon>
                  {five ? (
                    <IoIosArrowDown className="icon"></IoIosArrowDown>
                  ) : (
                    <IoIosArrowUp className="icon"></IoIosArrowUp>
                  )}
                </DetailInfoBoxIcon>
              </DetailInfoBoxTop>
              <DetailInfoBoxContentBox ref={fiveRef}>
                <DetailInfoBoxContent>
                  ?????? ?????????????????? ????????????????????????.
                  <br />
                  <br />??? ????????????:{' '}
                  <DetailServiceInfoA>????????????</DetailServiceInfoA>
                  <br />??? ?????? ??????:{' '}
                  <DetailServiceInfoA>????????????</DetailServiceInfoA> 1600-2126
                  <br />??? ????????? ??????:{' '}
                  <DetailServiceInfoA>????????????</DetailServiceInfoA>
                  <br />
                  <br />
                  * ????????????, ???????????? ?????? ??????
                  <br />
                  ?????????-?????????, 09:30-17:00(????????? ??????)
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
            </DetailInfo>
          </DetailTextGroup>
        </DetailBoxWrap>
      </DetailBox>
      <Footer />
    </Fragment>
  );
};

export default Detail;
