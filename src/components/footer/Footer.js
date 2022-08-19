import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });
  return <FooterBox>{isSmallScreen ? '작은거' : '큰거'}</FooterBox>;
};

export default Footer;

export const FooterBox = styled.div`
  text-align: center;
  font-size: 30px;
  background-color: black;
  color: white;
  width: 100%;
  height: 50px;
`;