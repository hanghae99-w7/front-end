import { useState, useRef } from 'react';
import jwt_decode from 'jwt-decode';

import styled from 'styled-components';
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

export const ServiceListBox = styled.div`
	border-bottom: 1px solid #e0e0e0;
`;

export const ServiceListTitle = styled.div`
	color: #343434;
	.serviceContentBox {
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		background: none;
		padding: 20px 0 20px;
		font-size: 16px;
		font-family: 'AppleSDGothicNeoM';
	}
	.serviceContentTitle {
		cursor: pointer;
	}
	.serviceSub {
		color: #6e6e6e;
		letter-spacing: -0.3px;
		font-size: 12px;
		float: right;

		.serviceUser {
			float: right;
			pointer-events: none;
			margin-top: 3px;
		}
		.serviceDate {
			float: right;
			margin-left: 17px;
			pointer-events: none;
			margin-top: 3px;
		}
	}
	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #343434;
	}

	input {
		float: right;
		margin-left: 6px;
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
