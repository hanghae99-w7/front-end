import styled from 'styled-components';

const Basket = () => {
  return <BasketBox></BasketBox>;
};

export default Basket;

export const BasketBox = styled.div`
  width: 100%;
  height: 250px;
  box-sizing: border-box;
  border: 1px solid red;
`;
