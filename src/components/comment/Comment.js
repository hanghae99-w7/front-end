import { useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';

import styled from 'styled-components';

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
  const hideService = () => {
    if (service) {
      serviceRef.current.style.display = 'none';
      setService(false);
    } else {
      if (
        window.sessionStorage.getItem('authorization') !== '' ||
        window.sessionStorage.getItem('authorization') !== undefined ||
        window.sessionStorage.getItem('authorization') !== null
      ) {
        const tokenEmail = jwt_decode(
          window.sessionStorage.getItem('authorization')
        ).sub;
        if (tokenEmail === email) {
          serviceRef.current.style.display = 'block';
          setService(true);
        } else {
          alert('작성자만 열람 가능합니다');
        }
      }
    }
  };

  return (
    <ServiceListBox>
      <ServiceListTitle>
        <button>
          <div onClick={hideService}>{title}</div>
          {adminChecked ? <input type="checkbox" /> : <input type="checkbox" />}
        </button>
        <div className="serviceSub">
          <div className="serviceUser">{username}</div>
          <div className="serviceDate">{createdAt.split('T')[0]}</div>
        </div>
      </ServiceListTitle>
      <ServiceListContent ref={serviceRef}>
        <div className="serviceContent">
          <div>{content}</div>
        </div>
      </ServiceListContent>
    </ServiceListBox>
  );
};

export default Comment;

export const ServiceListBox = styled.div`
  border-bottom: 1px solid #e0e0e0;
`;

export const ServiceListTitle = styled.div`
  color: #343434;
  margin-bottom: 30px;
  button {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    background: none;
    padding: 14px 0 4px;
    font-size: 16px;
    font-family: 'AppleSDGothicNeoM';
  }

  .serviceSub {
    color: #6e6e6e;
    letter-spacing: -0.3px;
    font-size: 12px;
    .serviceUser {
      float: left;
    }
    .serviceDate {
      float: right;
    }
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: #343434;
  }
`;

export const ServiceListContent = styled.div`
  display: none;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #343434;
`;
