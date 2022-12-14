// React import
import { useRef, useState, useCallback, useEffect, Fragment } from 'react';

// Redux import
import { useDispatch } from 'react-redux/es/exports';
import { emailDupCheckThunk, addUserThunk } from '../../redux/modules/user';

// Package import
import { TiDeleteOutline } from 'react-icons/ti';
import { BiShow, BiHide } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import PasswordStrengthBar from 'react-password-strength-bar';

// Component & Element import
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Button from '../../elements/button/Button';
import Input from '../../elements/input/Input';

// Static import
import {
  genderOptions,
  yearOptions,
  monthOptions,
  dateOptions,
  countryOptions,
} from '../../static/selectData';

// Style import
import {
  SignUpBox,
  SignUpBoxContainer,
  SignUpTitle,
  SignUpForm,
  SignUpDataGroup,
  SignUpDataSpan,
  SignUpDataInputGroup,
  SignUpDataInputIcon,
  SignUpAlertSpan,
  SignUpDataSelect,
  SignUpDataSelectBirthGroup,
  SignUpDataSelectBirth,
  SignUpDataAgreementGroup,
  SignUpDataAgreement,
  SignUpDataAgreementSpan,
  SignUpButtonGroup,
} from './SignUp.styled';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordView, setPasswordView] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckView, setPasswordCheckView] = useState(false);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const emailSpanRef = useRef();
  const emailIconRef = useRef();
  const passwordRef = useRef();
  const passwordSpanRef = useRef();
  const passwordIconRef = useRef();
  const passwordCheckRef = useRef();
  const passwordCheckSpanRef = useRef();
  const passwordCheckIconRef = useRef();
  const genderSpanRef = useRef();
  const nameSpanRef = useRef();
  const nameIconRef = useRef();
  const birthSpanRef = useRef();
  const countrySpanRef = useRef();
  const strengthBarRef = useRef();

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const newUser = {
    email,
    password,
    gender,
    name,
    birth: `${year}-${month}-${date}`,
    country,
    admin: false,
    adminToken: '',
  };

  useEffect(() => {
    if (email !== '') emailIconRef.current.style.display = 'block';
    else emailIconRef.current.style.display = 'none';
    if (password !== '') passwordIconRef.current.style.display = 'block';
    else passwordIconRef.current.style.display = 'none';
    if (passwordCheck !== '')
      passwordCheckIconRef.current.style.display = 'block';
    else passwordCheckIconRef.current.style.display = 'none';
    if (name !== '') nameIconRef.current.style.display = 'block';
    else nameIconRef.current.style.display = 'none';
  }, [email, password, passwordCheck, name]);

  useEffect(() => {
    if (password === '' && passwordCheck === '') {
      passwordSpanRef.current.innerText = '';
    } else if (password === '') {
      passwordCheckSpanRef.current.style.color = '';
      passwordCheckSpanRef.current.innerText = '';
      passwordSpanRef.current.style.color = '#f2153e';
      passwordSpanRef.current.innerText = '??????????????? ??????????????????';
    } else if (passwordCheck === '') {
      passwordCheckSpanRef.current.style.color = '';
      passwordSpanRef.current.style.color = '';
    } else {
      if (password !== passwordCheck) {
        passwordCheckSpanRef.current.style.color = '#f2153e';
        passwordCheckSpanRef.current.innerText = '????????? ??????????????? ????????????';
        passwordSpanRef.current.style.color = '';
      } else {
        passwordSpanRef.current.style.color = '';
        passwordCheckSpanRef.current.innerText = '??????????????? ???????????????';
        passwordCheckSpanRef.current.style.color = '#0fe05f';
      }
    }
  }, [password, passwordCheck]);

  const checkLoginId = useCallback(
    debounce((email) => {
      if (emailRegExp.test(email) === false) {
        emailSpanRef.current.innerText = '????????? ????????? ?????? ????????????';
        emailSpanRef.current.style.color = '#f2153e';
        setEmailCheck(false);
      } else {
        dispatch(emailDupCheckThunk({ email })).then((res) => {
          console.log(res.payload);
          if (res.payload) {
            emailSpanRef.current.innerText = '??????????????? ??????????????????';
            emailSpanRef.current.style.color = '#0fe05f';
            setEmailCheck(true);
          } else {
            emailSpanRef.current.innerText = '???????????? ??????????????????';
            emailSpanRef.current.style.color = '#f2153e';
            setEmailCheck(false);
          }
        });
      }
    }, 500),
    [email]
  );

  useEffect(() => {
    if (email !== '') {
      checkLoginId(email);
    } else {
      emailSpanRef.current.innerText = '';
      emailSpanRef.current.style.color = '';
    }
  }, [email]);

  const deleteText = useCallback(
    (state) => {
      switch (state) {
        case 'email': {
          setEmail('');
          break;
        }
        case 'password': {
          setPassword('');
          break;
        }
        case 'passwordCheck': {
          setPasswordCheck('');
          break;
        }
        case 'name': {
          setName('');
          break;
        }
        default:
          break;
      }
    },
    [email, password, passwordCheck, name]
  );

  const viewPassword = useCallback(
    (state) => {
      switch (state) {
        case 'password': {
          if (password === '') {
            break;
          } else {
            const type = passwordRef.current.type;
            if (type === 'password') {
              passwordRef.current.type = 'text';
              setPasswordView(true);
            } else {
              passwordRef.current.type = 'password';
              setPasswordView(false);
            }
            break;
          }
        }
        case 'passwordCheck': {
          if (passwordCheck === '') {
            break;
          } else {
            const type = passwordCheckRef.current.type;
            if (type === 'password') {
              passwordCheckRef.current.type = 'text';
              setPasswordCheckView(true);
            } else {
              passwordCheckRef.current.type = 'password';
              setPasswordCheckView(false);
            }
            break;
          }
        }
        default:
          break;
      }
    },
    [password, passwordCheck]
  );

  const signUpAccount = useCallback(
    (event) => {
      event.preventDefault();

      if (emailCheck === false) {
        emailRef.current.focus();
        emailSpanRef.current.style.color = '#f2153e';
        emailSpanRef.current.innerText = '???????????? ??????????????????';
      } else {
        if (strengthBarRef.current.state.score <= 2) {
          passwordRef.current.focus();
          passwordSpanRef.current.style.color = '#f2153e';
          passwordSpanRef.current.innerText =
            '????????? ?????????????????????(8??? ??????, ??? ???/?????????, ??????, ???????????? ??????)';
          passwordCheckSpanRef.current.style.innerText = '';
        } else if (password !== passwordCheck) {
          passwordRef.current.style.innerText = '';
          passwordCheckRef.current.focus();
          passwordCheckSpanRef.current.innerText = '????????? ??????????????? ????????????';
        } else {
          if (gender === '') {
            birthSpanRef.current.innerText = '';
            countrySpanRef.current.innerText = '';
            genderSpanRef.current.innerText = '????????? ????????? ?????????';
            genderSpanRef.current.style.color = '#f2153e';
          } else {
            if (year === '' || month === '' || date === '') {
              genderSpanRef.current.innerText = '';
              countrySpanRef.current.innerText = '';
              birthSpanRef.current.innerText = '??????????????? ????????? ?????????';
              birthSpanRef.current.style.color = '#f2153e';
            } else {
              if (country === '') {
                genderSpanRef.current.innerText = '';
                birthSpanRef.current.innerText = '';
                countrySpanRef.current.innerText = '??????????????? ????????? ?????????';
                countrySpanRef.current.style.color = '#f2153e';
              } else {
                console.log(newUser);
                dispatch(addUserThunk(newUser));
                alert('???????????? ??????');
                navigate('/signin');
              }
            }
          }
        }
      }
    },
    [email, password, passwordCheck, gender, name, year, month, date, country]
  );

  return (
    <Fragment>
      <Header />
      <SignUpBox mg_bottom={isSmallScreen ? '140px' : '200px'}>
        <SignUpBoxContainer>
          <SignUpTitle>?????? ????????????</SignUpTitle>
          <SignUpForm onSubmit={(event) => signUpAccount(event)}>
            <SignUpDataGroup>
              <SignUpDataSpan>????????? ??????</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={emailIconRef}>
                  <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('email')}
                  />
                </SignUpDataInputIcon>
                <Input
                  type={'text'}
                  value={email}
                  _onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={emailRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={emailSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>????????????</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordIconRef}>
                  <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('password')}
                  />
                </SignUpDataInputIcon>
                {passwordView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('password')}
                  ></BiHide>
                )}
                <Input
                  type={'password'}
                  value={password}
                  _onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={passwordRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordSpanRef}></SignUpAlertSpan>
              <PasswordStrengthBar
                password={password}
                style={{ display: 'none' }}
                ref={strengthBarRef}
              />
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>???????????? ??????</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={passwordCheckIconRef}>
                  <TiDeleteOutline
                    className="icon-password-cancel"
                    onClick={() => deleteText('passwordCheck')}
                  />
                </SignUpDataInputIcon>
                {passwordCheckView ? (
                  <BiShow
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  />
                ) : (
                  <BiHide
                    className="icon-hidden"
                    onClick={() => viewPassword('passwordCheck')}
                  ></BiHide>
                )}
                <Input
                  type={'password'}
                  value={passwordCheck}
                  _onChange={(e) => setPasswordCheck(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                  _ref={passwordCheckRef}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={passwordCheckSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>??????</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataSelect
                  onChange={(e) => setGender(e.currentTarget.value)}
                  value={gender}
                  required
                >
                  <option value="none" selected hidden>
                    ????????? ????????? ?????????
                  </option>
                  {genderOptions.map((item) => {
                    return (
                      <option
                        style={{ fontFamily: 'AppleSDGothicNeoL' }}
                        key={item.key}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  })}
                </SignUpDataSelect>
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={genderSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>??????</SignUpDataSpan>
              <SignUpDataInputGroup>
                <SignUpDataInputIcon ref={nameIconRef}>
                  <TiDeleteOutline
                    className="icon-cancel"
                    onClick={() => deleteText('name')}
                  />
                </SignUpDataInputIcon>
                <Input
                  type={'text'}
                  value={name}
                  _onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    height: '40px',
                    pd_left: '10px',
                    pd_right: '30px',
                  }}
                />
              </SignUpDataInputGroup>
              <SignUpAlertSpan ref={nameSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>????????????</SignUpDataSpan>
              <SignUpDataSelectBirthGroup>
                <SignUpDataSelectBirth
                  onChange={(e) => setYear(e.currentTarget.value)}
                  value={year}
                >
                  <option value="none" selected hidden>
                    {' '}
                  </option>
                  {yearOptions.map((item) => {
                    return (
                      <option
                        style={{
                          fontFamily: 'AppleSDGothicNeoM',
                          fontSize: '13px',
                        }}
                        key={item.key}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  })}
                </SignUpDataSelectBirth>
                <SignUpDataSelectBirth
                  onChange={(e) => setMonth(e.currentTarget.value)}
                  value={month}
                >
                  <option value="none" selected hidden>
                    {' '}
                  </option>
                  {monthOptions.map((item) => {
                    return (
                      <option
                        style={{
                          fontFamily: 'AppleSDGothicNeoM',
                          fontSize: '13px',
                        }}
                        key={item.key}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  })}
                </SignUpDataSelectBirth>
                <SignUpDataSelectBirth
                  onChange={(e) => setDate(e.currentTarget.value)}
                  value={date}
                >
                  <option value="none" selected hidden>
                    {' '}
                  </option>
                  {dateOptions.map((item) => {
                    return (
                      <option
                        style={{
                          fontFamily: 'AppleSDGothicNeoM',
                          fontSize: '13px',
                        }}
                        key={item.key}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    );
                  })}
                </SignUpDataSelectBirth>
              </SignUpDataSelectBirthGroup>
              <SignUpAlertSpan ref={birthSpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataGroup>
              <SignUpDataSpan>??????</SignUpDataSpan>
              <SignUpDataSelect
                onChange={(e) => setCountry(e.currentTarget.value)}
                value={country}
              >
                <option value="none" selected hidden>
                  {' '}
                </option>
                {countryOptions.map((item) => {
                  return (
                    <option
                      style={{ fontFamily: 'AppleSDGothicNeoL' }}
                      key={item.key}
                      value={item.value}
                    >
                      {item.value}
                    </option>
                  );
                })}
              </SignUpDataSelect>
              <SignUpAlertSpan ref={countrySpanRef}></SignUpAlertSpan>
            </SignUpDataGroup>
            <SignUpDataAgreementGroup>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [??????] ??? 14??? ???????????????
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [??????] ???????????? ??????
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <Input
                  type={'checkbox'}
                  style={{ width: '14px', height: '15px' }}
                />
                <SignUpDataAgreementSpan>
                  [??????] ???????????? ?????? ??? ?????? ??????
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input
                  type="checkbox"
                  style={{ width: '14px', height: '15px', margin: '0px' }}
                />
                <SignUpDataAgreementSpan>
                  [??????] ????????? ?????? ???????????? ?????? ??? ?????? ??????
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
              <SignUpDataAgreement>
                <input
                  type="checkbox"
                  style={{ width: '14px', height: '15px', margin: '0px' }}
                />
                <SignUpDataAgreementSpan>
                  [??????] ????????? ?????? ?????? ??? ?????? ??????
                </SignUpDataAgreementSpan>
              </SignUpDataAgreement>
            </SignUpDataAgreementGroup>
            <SignUpButtonGroup>
              <Button
                type={'button'}
                text={'??????'}
                _onClick={() => navigate('/')}
                style={{
                  width: '213px',
                  height: '38px',
                  bg_color: 'transparent',
                  color: '#525252',
                }}
              ></Button>
              <Button
                type={'submit'}
                text={'????????????'}
                style={{ width: '213px', height: '38px', bg_color: 'black' }}
              ></Button>
            </SignUpButtonGroup>
          </SignUpForm>
        </SignUpBoxContainer>
      </SignUpBox>
      <Footer />
    </Fragment>
  );
};
export default SignUp;
