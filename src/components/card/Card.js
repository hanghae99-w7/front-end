import { Fragment,memo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CardBox,
  CardImg,
  CardTextBox,
  CardItemName,
  CardItemPrice,
  CardBox2,
  CardImg2,
} from './Card.styled';

const Card = ({ id, price, name, imgUrl, cardView }) => {
  const navigate = useNavigate();
  console.log(cardView)

  return (
    <Fragment>
      {cardView === true ? (
        <CardBox id={id}>
          <CardImg src={imgUrl} onClick={() => navigate(`/detail/${id}`)} />
          <CardTextBox>
            <CardItemName>{name}</CardItemName>
            <br />
            <CardItemPrice>{price}</CardItemPrice>
            <svg
              stroke-width="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
            </svg>
          </CardTextBox>
        </CardBox>
      ) : (
        <CardBox2 id={id}>
          <CardImg2 src={imgUrl} onClick={() => navigate(`/detail/${id}`)} />
          <CardTextBox>
          </CardTextBox>
        </CardBox2>
      )}
    </Fragment>
  );
};

export default memo(Card);
