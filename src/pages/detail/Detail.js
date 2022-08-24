// React
import { useState, useRef, Fragment, useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getSingleItemThunk } from '../../redux/modules/item';
import { postbasketThunk, addSelectBasket } from '../../redux/modules/basket';

// Packages
import { useParams } from 'react-router-dom';
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
    console.log('test');
    dispatch(postbasketThunk(id)).then((res) => {
      if (res.payload) {
        dispatch(addSelectBasket({ id: item_single.id, price: item_single.price, name: item_single.productName, imgUrl: item_single.imgUrl }));
        alert('장바구니에 추가되었습니다');
      }
    });
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
              {detail_is_loaded ? item_single.productName : 'GENTLE MONSTER'}는
              사각형태의 블랙 아세테이트 프레임입니다. 엔드피스의 커팅 라인과
              과감한 곡선이 사용된 웰링턴형 프레임의 키홀 브릿지가 매력적인
              제품입니다. 템플은 블랙과 클리어가 결합된 이중 아세테이트 시트를
              사용하였습니다. 엔드피스의 원형 장식과 템플의 라이닝 디테일 메탈
              장식이 특징이며 99.9% UV 차단이 되는 그린 렌즈를 사용하였습니다.
            </DetailTextContent>
            <DetailButtonGroup>
              <Button
                type={'button'}
                text={'쇼핑백에 추가'}
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
              무료 배송 및 무료 반품 서비스,&nbsp;
              <DetailServiceInfoA>무이자 할부 서비스</DetailServiceInfoA>
            </DetailServiceInfo>
            <DetailInfo>
              <DetailInfoBoxTop onClick={() => changeStatus('one')}>
                <DetailInfoBoxText>제품 세부 정보</DetailInfoBoxText>
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
                  • 원형 모양의 메탈 장식
                  <br />
                  • 템플 팁 라인 디테일
                  <br />
                  • 그린 틴트 렌즈
                  <br />
                  • 프레임 정면: 142.1mm, 템플 길이: 147.4mm
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;렌즈 가로: 47.2mm, 렌즈 높이: 42.7mm
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;브릿지: 23mm
                  <br />
                  • 제조국: 중국
                  <br />
                  • 제조자 및 수입자: IICOMBINED CO.,LTD.
                  <br />
                  • 제조국: 중국
                  <br />
                  <DetailServiceInfoA>사이즈 자세히 보기</DetailServiceInfoA>
                  <br />
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('two')}>
                <DetailInfoBoxText>무료 선물 포장 서비스</DetailInfoBoxText>
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
                  젠틀몬스터 공식 온라인 스토어에서 구매하는 모든 분들께 선물
                  포장 서비스를 제공해 드립니다.
                  <br />
                  <br />
                  <DetailInfoBoxContentImg src={Package} />
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('three')}>
                <DetailInfoBoxText>기본 피팅 서비스</DetailInfoBoxText>
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
                  • 온라인에서 주문하시는 젠틀몬스터의 모든 제품은 기본 피팅 후
                  발송됩니다.
                  <br />
                  <br />
                  <DetailServiceInfoA>자세히보기</DetailServiceInfoA>
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('four')}>
                <DetailInfoBoxText>배송 & 반품</DetailInfoBoxText>
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
                  • 무료 배송
                  <br />
                  오늘 주문한 상품을 영업일 기준 1-3일내에 받아보세요.
                  <br />
                  <br />
                  • 무료 반품
                  <br />
                  무료 반품 서비스를 이용하세요. 구매하신 제품은 수령하신
                  날로부터 7일 이내에 접수해 주셔야 합니다. 제품은 사용되지 않은
                  상태를 유지해야 하며, 모든 구성품을 포함하고 있어야 합니다.
                </DetailInfoBoxContent>
              </DetailInfoBoxContentBox>
              <DetailInfoBoxTop onClick={() => changeStatus('five')}>
                <DetailInfoBoxText>도움이 필요하신가요?</DetailInfoBoxText>
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
                  전문 어드바이저가 도와드리겠습니다.
                  <br />
                  <br />• 라이브챗:{' '}
                  <DetailServiceInfoA>문의하기</DetailServiceInfoA>
                  <br />• 전화 문의:{' '}
                  <DetailServiceInfoA>전화하기</DetailServiceInfoA> 1600-2126
                  <br />• 이메일 문의:{' '}
                  <DetailServiceInfoA>문의하기</DetailServiceInfoA>
                  <br />
                  <br />
                  * 라이브챗, 고객센터 운영 시간
                  <br />
                  월요일-금요일, 09:30-17:00(공휴일 제외)
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
