import '../../static/font/font.css';
import Header from '../../components/header/Header';
import { landing_media1, landing_media2 } from '../../static/media/media';
import {
  landing_1,
  landing_2,
  landing_3,
  landing_4,
  landing_5,
} from '../../static/image/image';
import Button from '../../elements/button/Button';
import {
  LandingBox,
  LandingImgBox,
  LandingImg,
  LandingVideo,
  LandingH1,
  LandingH1BtnBox,
  LandingImgBig1,
  LandingImg1Box,
  LandingH1BtnBox2,
  LandingH1BtnBox3,
  LandingVideo1Box,
  BtnGruob1,
  LandingH1BtnBoxChange,
  LandingH1BtnBoxChangeTwo,
} from './Landing.styled';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../components/footer/Footer';

const Landing = () => {
  const imgArray = [landing_1, landing_2, landing_3, landing_4, landing_5];
  const random = Math.floor(Math.random() * 4);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const isSmallScreenH1Div = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <LandingBox>
      <Header />
      {/*반응형 웹 이미지 파트 */}
      <LandingImgBox>
        {!isSmallScreenH1Div ? (
          <LandingH1BtnBox>
            <LandingH1>SELFIE SELECTION: SEE ME</LandingH1>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_left: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBox>
        ) : (
          <LandingH1BtnBoxChange>
            <LandingH1>SELFIE SELECTION: SEE ME</LandingH1>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_left: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBoxChange>
        )}

        {!isSmallScreen ? (
          <LandingImg src={imgArray[random]} />
        ) : (
          <LandingImg1Box>
            <LandingImgBig1 src={imgArray[random]} />
          </LandingImg1Box>
        )}
      </LandingImgBox>

      {/*반응형 쏘니 영상 파트 */}
      <LandingImgBox>
        {!isSmallScreenH1Div ? (
          <LandingH1BtnBox2>
            <LandingH1>GENTLE MONSTER ✕ SON7</LandingH1>
            <p className="text-area__sub-title font--en">
              Nice One Sonny, Nice One Son
            </p>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
            </BtnGruob1>
          </LandingH1BtnBox2>
        ) : (
          <LandingH1BtnBoxChangeTwo>
            <LandingH1>GENTLE MONSTER ✕ SON7</LandingH1>
            <p className="text-area__sub-title font--en">
              Nice One Sonny, Nice One Son
            </p>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
            </BtnGruob1>
          </LandingH1BtnBoxChangeTwo>
        )}
        {!isSmallScreen ? (
          <LandingVideo src={landing_media1} autoPlay loop muted />
        ) : (
          <LandingImg1Box>
            <LandingVideo1Box src={landing_media1} autoPlay loop muted />
          </LandingImg1Box>
        )}
      </LandingImgBox>

      <LandingImgBox>
        {!isSmallScreenH1Div ? (
          <LandingH1BtnBox3>
            <LandingH1>MONCLER + GENTLE MONSTER</LandingH1>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_left: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBox3>
        ) : (
          <LandingH1BtnBoxChange>
            <LandingH1>MONCLER + GENTLE MONSTER</LandingH1>
            <BtnGruob1>
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_right: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'자세히보기'}
              />
              <Button
                style={{
                  ft_size: '12px',
                  bd_color: 'white',
                  mg_left: '5px',
                  width: '150px',
                  height: '40px',
                }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBoxChange>
        )}
        {!isSmallScreen ? (
          <LandingVideo src={landing_media2} autoPlay loop muted />
        ) : (
          <LandingImg1Box>
            <LandingVideo1Box src={landing_media2} autoPlay loop muted />
          </LandingImg1Box>
        )}
      </LandingImgBox>
      <Footer />
    </LandingBox>
  );
};

export default Landing;
