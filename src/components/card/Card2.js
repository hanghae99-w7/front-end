import {
  CardBox2,
  CardImg2,
  CardTextBox2,
  CardItemName,
  CardItemPrice,
} from './Card.styled';
import { card_1 } from '../../static/image/image';

const Card2 = () => {
  return (
    <CardBox2>
      <CardImg2 src={card_1} />
      <CardTextBox2>
        <CardItemName>로티 01</CardItemName>
        <br />
        <CardItemPrice>280,000원</CardItemPrice>
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"

          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
        </svg>
      </CardTextBox2>
    </CardBox2>
  );
};

export default Card2;
