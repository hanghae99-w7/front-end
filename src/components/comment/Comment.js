// React
import { useState, useRef } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import {
  deleteServiceThunk,
  patchAdminCheckThunk,
} from '../../redux/modules/service';

// Packages
import jwt_decode from 'jwt-decode';

// Style
import Button from '../../elements/button/Button';

import {
  ServiceListBox,
  ServiceListTitle,
  ServiceListContent,
} from './Comment.styled';
import { useNavigate } from 'react-router-dom';



const Comment = ({
  id,
  username,
  email,
  title,
  content,
  createdAt,
  adminChecked,
}) => {
  const [service, setService] = useState(false);

  const serviceRef = useRef();
  const radioRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hideService = () => {
    if (service) {
      serviceRef.current.style.display = 'none';
      setService(false);
    } else {
      if (window.sessionStorage.length !== 0) {
        const tokenEmail = jwt_decode(
          window.sessionStorage.getItem('authorization')
        ).sub;
        const auth = jwt_decode(
          window.sessionStorage.getItem('authorization')
        ).auth;
        if (tokenEmail === email || auth === 'ADMIN') {
          serviceRef.current.style.display = 'block';
          setService(true);
        } else {
          alert('작성자 또는 관리자만 열람 가능합니다');
        }
      } else {
        alert('로그인이 필요합니다');
        navigate('/signin');
      }
    }
  };

  const onClickHandler = () => {
    dispatch(deleteServiceThunk(id));
  };

  const adminCheckProved = () => {
    console.log(window.sessionStorage.length);
    try {
      if (window.sessionStorage.length !== 0) {
        const auth = jwt_decode(
          window.sessionStorage.getItem('authorization')
        ).auth;
        if (auth === 'ADMIN') {
          dispatch(patchAdminCheckThunk(id));
          radioRef.current.disabled = true;
        } else {
          alert('관리자만 확인 가능합니다');
          radioRef.current.checked = false;
        }
      } else if (window.sessionStorage.length === 0) {
        radioRef.current.checked = false;
        alert('관리자 로그인이 필요합니다');
        navigate('/signin');
      }
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <ServiceListBox>
      <ServiceListTitle>
        <div className="serviceContentBox">
          <div className="serviceContentTitle" onClick={hideService}>
            {title}
          </div>
          <div className="serviceSub">
            {adminChecked ? (
              <input type="checkbox" checked disabled />
            ) : (
              <input
                type="checkbox"
                onClick={adminCheckProved}
                ref={radioRef}
              />
            )}
            <div className="serviceDate">{createdAt.split('T')[0]}</div>
            <div className="serviceUser">{username}</div>
          </div>
        </div>
      </ServiceListTitle>
      <ServiceListContent ref={serviceRef}>
        <div className="serviceContent">
          <div>{content}</div>
          <div
            style={{
              marginLeft: 'auto',
              width: '38px',
            }}
          >
            <div className="deleteBtn">
              <Button
                _onClick={onClickHandler}
                style={{
                  ft_size: '13px',
                  bd_color: 'black',
                  bg_color: 'black',
                  mg_top: '10px',
                  width: '38px',
                  height: '24px',
                }}
                text={'삭제'}
              ></Button>
            </div>
          </div>
        </div>
      </ServiceListContent>
    </ServiceListBox>
  );
};

export default Comment;
