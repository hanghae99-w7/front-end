import { Package } from '../../static/image/image';

import {
  BasketBox,
  BasketBoxImg,
  BasketBoxTitle,
  BasketBoxPrice,
} from './Basket.styled';

const Basket = () => {
    
  return (
    <BasketBox>
      <BasketBoxImg src={Package} />
      <BasketBoxTitle>루토 01(K)</BasketBoxTitle>
      <BasketBoxPrice>269,999원</BasketBoxPrice>
    </BasketBox>
  );
};

export default Basket;
