import styled from 'styled-components';
import '../../static/font/font.css';

const Landing = () => {
  return (
    <LandingBox>
      {/* <LandingVideo src={landing_1} autoPlay loop muted /> */}
    </LandingBox>
  );
};

export default Landing;

export const LandingBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 500px;
  overflow: hidden;
`;

// export const LandingVideo = styled.video`
//   width: 100%;
//   height: auto;
// `;
