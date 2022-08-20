import '../../static/font/font.css';
import Header from '../../components/header/Header';
import { landing_media1, landing_media2 } from '../../static/media/media';
import { landing_1 } from '../../static/image/image';
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
  LandingVideo1Box,
  BtnGruob1,
  LandingH1BtnBoxChange,
} from './Landing.styled';
import { useMediaQuery } from 'react-responsive';

const Landing = () => {
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
                style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
                text={'자세히보기'}
              />
              <Button
                style={{ ft_size: '13px', bd_color: 'white', mg_left: '5px' }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBox>
        ) : (
          <LandingH1BtnBoxChange>
            <LandingH1>SELFIE SELECTION: SEE ME</LandingH1>
            <BtnGruob1>
              <Button
                style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
                text={'자세히보기'}
              />
              <Button
                style={{ ft_size: '13px', bd_color: 'white', mg_left: '5px' }}
                text={'구매하기'}
              />
            </BtnGruob1>
          </LandingH1BtnBoxChange>
        )}

        {!isSmallScreen ? (
          <LandingImg src={landing_1} />
        ) : (
          <LandingImg1Box>
            <LandingImgBig1 src={landing_1} />
          </LandingImg1Box>
        )}
      </LandingImgBox>

      {/*반응형 쏘니 영상 파트 */}
      <LandingImgBox>
        {!isSmallScreenH1Div ? (
          <LandingH1BtnBox>
            <LandingH1>GENTLE MONSTER ✕ SON7</LandingH1>
            <p class="text-area__sub-title font--en">
              Nice One Sonny, Nice One Son
            </p>
            <BtnGruob1>
            <Button
              style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
              text={'자세히보기'}
            />
            </BtnGruob1>
          </LandingH1BtnBox>
          
        ) : (
          <LandingH1BtnBoxChange>
            <LandingH1>GENTLE MONSTER ✕ SON7</LandingH1>
            <p class="text-area__sub-title font--en">
              Nice One Sonny, Nice One Son
            </p>
            <BtnGruob1>
            <Button
              style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
              text={'자세히보기'}
            />
            </BtnGruob1>
          </LandingH1BtnBoxChange>
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
        <LandingH1BtnBox>
          <LandingH1>MONCLER + GENTLE MONSTER</LandingH1>
          <BtnGruob1>
          <Button
            style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
            text={'자세히보기'}
          />
          <Button
            style={{ ft_size: '13px', bd_color: 'white', mg_left: '5px' }}
            text={'구매하기'}
          />
          </BtnGruob1>
        </LandingH1BtnBox>
      ) : (
        <LandingH1BtnBoxChange>
          <LandingH1>MONCLER + GENTLE MONSTER</LandingH1>
          <BtnGruob1>
          <Button
            style={{ ft_size: '13px', bd_color: 'white', mg_right: '5px' }}
            text={'자세히보기'}
          />
          <Button
            style={{ ft_size: '13px', bd_color: 'white', mg_left: '5px' }}
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
    </LandingBox>
  );
};

export default Landing;
