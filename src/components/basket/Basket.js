import { useDispatch } from 'react-redux';
import {deleteBasketThunk} from '../../redux/modules/basket'

import {
  BasketBox,
  BasketBoxImg,
  BasketBoxTitle,
  BasketBoxPrice,
  BasketBoxDelete,
} from './Basket.styled';

const Basket = ({ id, name, price, imgUrl }) => {
  const dispatch = useDispatch();

  const deleteBaskte = () => {
    dispatch(deleteBasketThunk(id));
  };

  return (
    <BasketBox>
      <BasketBoxImg src={imgUrl} />
      <BasketBoxTitle>{name}</BasketBoxTitle>
      <BasketBoxPrice>{price}원</BasketBoxPrice>
      <BasketBoxDelete onClick={deleteBaskte}>삭제</BasketBoxDelete>
    </BasketBox>
  );
};

export default Basket;
