// React
import { useState, useRef } from 'react';

// Package
import jwt_decode from 'jwt-decode';

// Style
import {
  ServiceListBox,
  ServiceListTitle,
  ServiceListContent,
} from './Comment.styled';

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
