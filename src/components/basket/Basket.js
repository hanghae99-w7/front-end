import { Package } from '../../static/image/image';

import {
  BasketBox,
  BasketBoxImg,
  BasketBoxTitle,
  BasketBoxPrice,
} from './Basket.styled';

const Basket = ({ id, name, price, imgUrl }) => {
  return (
    <BasketBox>
      <BasketBoxImg src={imgUrl} />
      <BasketBoxTitle>{name}</BasketBoxTitle>
      <BasketBoxPrice>{price}원</BasketBoxPrice>
    </BasketBox>
  );
};

export default Basket;
