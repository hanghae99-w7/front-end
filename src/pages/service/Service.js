import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceThunk, postServiceThunk } from '../../redux/modules/service';

import { useMediaQuery } from 'react-responsive';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { service_media1 } from '../../static/media/media';

import {} from './Service.styled';
import Button from '../../elements/button/Button';
import Comment from '../../components/comment/Comment';

import {
	TitleInput,
	ContentInput,
	ServiceBoxWrap,
	ServiceBoxContainer,
	ServiceListContainer,
	MainVideoWrap,
	ServiceVideoBox,
	ServiceVideoH1,
	VideoH1,
	SmallServiceVideoH1,
	SmallVideoH1,
	SmallMainVideoWrap,
	SmallServiceVideoBox,
} from './Service.styled';

const Service = () => {
	const dispatch = useDispatch();

	const serviceList = useSelector((state) => state.service.serviceList);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const isSmallScreen = useMediaQuery({
		query: '(max-width: 770px)',
	});

	//modules.service에 있는 getServiceList함수를 실행시킴
	useEffect(() => {
		dispatch(getServiceThunk());
	}, []);

	const onClickHandler = () => {
		dispatch(postServiceThunk({ title, content }));
	};

	return (
		<div>
			<Header />
			<ServiceBoxWrap>
				{isSmallScreen ? (
					<Fragment>
						<SmallServiceVideoH1>
							<SmallVideoH1>
								언제 어디서나 고객님을 위한 <br />
								젠틀몬스터 서비스를 만나보세요
							</SmallVideoH1>
						</SmallServiceVideoH1>
						<SmallMainVideoWrap>
							<SmallServiceVideoBox src={service_media1} autoPlay loop muted />
						</SmallMainVideoWrap>
					</Fragment>
				) : (
					<Fragment>
						<ServiceVideoH1>
							<VideoH1>
								언제 어디서나 고객님을 위한 젠틀몬스터 서비스를 만나보세요
							</VideoH1>
						</ServiceVideoH1>
						<MainVideoWrap>
							<ServiceVideoBox src={service_media1} autoPlay loop muted />
						</MainVideoWrap>
					</Fragment>
				)}

				<ServiceBoxContainer>
					<div className="service1">문의하기</div>
					<div className="service2">
						주문, 배송, 제품, 결제 등 궁금한 사항이 있으시거나 <br />
						도움이 필요하시면 문의글을 남겨주시기 바랍니다.
					</div>
					<TitleInput>
						<div className="serviceTitle">제목</div>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</TitleInput>

					<ContentInput>
						<div className="serviceContent">내용</div>
						<textarea
							type="text"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<div>
							<Button
								_onClick={onClickHandler}
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

					<ServiceListContainer>
						{serviceList.map((service) => {
							return (
								<Comment
									key={service.id}
									id={service.id}
									username={service.username}
									email={service.email}
									title={service.title}
									content={service.content}
									createdAt={service.createdAt}
									adminChecked={service.adminChecked}
								></Comment>
							);
						})}
					</ServiceListContainer>
				</ServiceBoxContainer>
			</ServiceBoxWrap>
			<Footer />
		</div>
	);
};

export default Service;
