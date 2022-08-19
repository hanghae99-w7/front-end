import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });
  return <HeaderBox>{isSmallScreen ? '작은거' : '큰거'}</HeaderBox>;
};

export default Header;

export const HeaderBox = styled.div`
  text-align: center;
  font-size: 30px;
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
`;
