// React
import { useState, useRef } from 'react';

// Packages
import jwt_decode from 'jwt-decode';

// Style
import {
  ServiceListBox,
  ServiceListTitle,
  ServiceListContent,
} from './Comment.styled';
import Button from '../../elements/button/Button';


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
				<div className="serviceContentBox">
					<div className="serviceContentTitle" onClick={hideService}>
						{title}
					</div>
					<div className="serviceSub">
						{adminChecked ? (
							<input type="checkbox" />
						) : (
							<input type="checkbox" />
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
						className="deleteBtn"
						style={{
							marginLeft: 'auto',
							width: '38px',
						}}
					>
						<Button
							// _onClick={onClickHandler}
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
			</ServiceListContent>
		</ServiceListBox>
	);
};

export default Comment;