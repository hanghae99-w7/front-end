// React
import { Fragment, memo } from 'react';
import { useDispatch } from 'react-redux';

// Redux
import { useSelector } from 'react-redux';
import { postBasketThunk } from '../../redux/modules/basket';

// Packages
import { useNavigate } from 'react-router-dom';

// Style
import {
  CardBox,
  CardImg,
  CardTextBox,
  CardItemName,
  CardItemPrice,
  CardBox2,
  CardImg2,
  CartItemIconBox,
} from './Card.styled';

const Card = ({ id, price, name, imgUrl, cardView }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const baskets = useSelector((state) => state.basket.basket);

  const addBasket = () => {
    if (baskets.find((basket) => basket.itemId === id) === undefined) {
      dispatch(postBasketThunk(id)).then((res) => {
        if (res.payload.success) {
          alert('장바구니에 추가되었습니다');
        }
      });
    } else { 
      alert('이미 장바구니에 들어가 있습니다');
    }
  };

  return (
    <Fragment>
      {cardView === true ? (
        <CardBox id={id}>
          <CardImg src={imgUrl} onClick={() => navigate(`/detail/${id}`)} />
          <CardTextBox>
            <CardItemName onClick={() => navigate(`/detail/${id}`)}>
              {name}
            </CardItemName>
            <br />
            <CardItemPrice onClick={() => navigate(`/detail/${id}`)}>
              {price}
            </CardItemPrice>
            {window.sessionStorage.length > 0 ? (
              <CartItemIconBox onClick={addBasket}>
                <svg
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                </svg>
              </CartItemIconBox>
            ) : (
              <div></div>
            )}
          </CardTextBox>
        </CardBox>
      ) : (
        <CardBox2 id={id}>
          <CardImg2 src={imgUrl} onClick={() => navigate(`/detail/${id}`)} />
          <CardTextBox></CardTextBox>
        </CardBox2>
      )}
    </Fragment>
  );
};

export default memo(Card);