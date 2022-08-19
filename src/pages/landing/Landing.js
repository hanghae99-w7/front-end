import styled from 'styled-components';
import '../../static/font/font.css';
import Header from '../../components/header/Header';

const Landing = () => {
  return (
    <LandingBox>
      <Header />
      {/* <LandingVideo src={landing_1} autoPlay loop muted /> */}
    </LandingBox>
  );
};

export default Landing;

export const LandingBox = styled.div`
  width: 100%;
  height: auto;
`;

// export const LandingVideo = styled.video`
//   width: 100%;
//   height: auto;
// `;
