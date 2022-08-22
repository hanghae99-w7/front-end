import { useRef, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import {} from './Service.styled';
import Button from '../../elements/button/Button';

import {
	TitleInput,
	ContentInput,
	ServiceBoxWrap,
	ServiceBoxContainer,
} from './Service.styled';

const Service = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const onClickHandler = () => {
		const newAsk = {
			// id:
			// username:
			// title:
			// content:
			// adminChecked:
			// createdAt:
			// modifiedAt:
		};
	};

	return (
		<div>
			<Header />
			<ServiceBoxWrap>
				<ServiceBoxContainer>
					<div className="service">
						문의하기
					</div>
					<div className="ServiceTitle">제목</div>
					<TitleInput>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</TitleInput>

					<ContentInput>
						<div className="ServiceContent">내용</div>
						<textarea
							type="text"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<div>
							<Button
								onClick={onClickHandler}
								style={{
									ft_size: '13px',
									bd_color: 'black',
									bg_color: 'black',
									mg_top: '10px',
									width: '100%',
									height: '40px',
								}}
								text={'등록하기'}
							></Button>
						</div>
					</ContentInput>

					<hr />
				</ServiceBoxContainer>
			</ServiceBoxWrap>
			<Footer />
		</div>
	);
};

export default Service;
