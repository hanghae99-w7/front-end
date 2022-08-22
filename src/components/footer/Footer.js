import { useRef, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import {
	SmallFooterBox,
	SmallFooterNav,
	SmallFooterSection,
	SmallFooterTitle,
	SmallFooterGroup,
	SmallFooterItems,
	SmallFooterItem,
	SmallCopyright,
	SmallCopyrightTitle,
	SmallCopyrightContent,
	LargeFooterBox,
	LargeFooterNav,
	LargeFooterSection,
	LargeFooterTitle,
	LargeFooterGroup,
	LargeFooterItems,
	LargeFooterItem,
	LargeCopyright,
	LargeCopyrightTitle,
	LargeCopyrightContent,
} from './Footer.styled';

const Footer = () => {
	const [service, setService] = useState(false);
	const [law, setLaw] = useState(false);
	const [social, setSocial] = useState(false);

	const isSmallScreen = useMediaQuery({
		query: '(max-width: 770px)',
	});

	const serviceRef = useRef();
	const lawRef = useRef();
	const socialRef = useRef();

	const hideService = () => {
		if (service) {
			serviceRef.current.style.display = 'none';
			setService(false);
		} else {
			serviceRef.current.style.display = 'block';
			setService(true);
		}
	};

	const hideLaw = () => {
		if (law) {
			lawRef.current.style.display = 'none';
			setLaw(false);
		} else {
			lawRef.current.style.display = 'block';
			setLaw(true);
		}
	};

	const hideSocial = () => {
		if (social) {
			socialRef.current.style.display = 'none';
			setSocial(false);
		} else {
			socialRef.current.style.display = 'block';
			setSocial(true);
		}
	};

	return (
		<div>
			{isSmallScreen ? (
				<SmallFooterBox>
					<SmallFooterNav>
						<SmallFooterSection>
							<SmallFooterTitle>
								<button>
									<Link to="/">고객서비스</Link>
									<span onClick={hideService}>{service ? '-' : '+'}</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup ref={serviceRef}>
								<SmallFooterItems>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">문의</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">배송</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">서비스</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">교환 및 반품</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">주문취소</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">주문조회</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">수리서비스 가이드</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">제품 사용 가이드</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">제품 등록</Link>
										</div>
									</SmallFooterItem>
								</SmallFooterItems>
							</SmallFooterGroup>
						</SmallFooterSection>

						<SmallFooterSection>
							<SmallFooterTitle>
								<button>
									<Link to="/">법적 고지</Link>
									<span onClick={hideLaw}>{law ? '-' : '+'}</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup ref={lawRef}>
								<SmallFooterItems>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">이용약관</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">개인정보처리방침</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">쿠키 정책</Link>
										</div>
									</SmallFooterItem>
								</SmallFooterItems>
							</SmallFooterGroup>
						</SmallFooterSection>

						<SmallFooterSection>
							<SmallFooterTitle>
								<button>
									<Link to="/">소셜 미디어</Link>
									<span onClick={hideSocial}>{social ? '-' : '+'}</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup ref={socialRef}>
								<SmallFooterItems>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">페이스북</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">인스타그램</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">유튜브</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">트위터</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">카카오톡</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">핀터레스트</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">위쳇</Link>
										</div>
									</SmallFooterItem>
									<SmallFooterItem>
										<div className="footer_item_link">
											<Link to="/">웨이보</Link>
										</div>
									</SmallFooterItem>
								</SmallFooterItems>
							</SmallFooterGroup>
						</SmallFooterSection>
					</SmallFooterNav>

					<SmallCopyright>
						<SmallCopyrightTitle>© 2022 GENTLE MONSTER</SmallCopyrightTitle>
						<SmallCopyrightContent>
							<div className="copyright">
								<p className="content1">
									주) 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호:
									119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호
									(사업자 정보 확인) | 이메일 문의: cs@gentlemonster.com |
									개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구
									어울마당로5길 41 | 대표번호: 1600-2126
								</p>
								<p className="content2">
									고객님의 안전한 현금자산 거래를 위하여 하나은행과
									채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스
									가입사실 확인
								</p>
							</div>
						</SmallCopyrightContent>
					</SmallCopyright>
				</SmallFooterBox>
			) : (
				<LargeFooterBox>
					<LargeFooterNav>
						<LargeFooterSection>
							<LargeFooterTitle>
								<button>
									<Link to="/">고객서비스</Link>
								</button>
							</LargeFooterTitle>
							<LargeFooterGroup>
								<LargeFooterItems>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">문의</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">배송</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">서비스</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">교환 및 반품</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">주문취소</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">주문조회</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">수리서비스 가이드</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">제품 사용 가이드</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">제품 등록</Link>
										</div>
									</LargeFooterItem>
								</LargeFooterItems>
							</LargeFooterGroup>
						</LargeFooterSection>

						<LargeFooterSection>
							<LargeFooterTitle>
								<button>
									<Link to="/">법적 고지</Link>
								</button>
							</LargeFooterTitle>
							<LargeFooterGroup>
								<LargeFooterItems>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">이용약관</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">개인정보처리방침</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">쿠키 정책</Link>
										</div>
									</LargeFooterItem>
								</LargeFooterItems>
							</LargeFooterGroup>
						</LargeFooterSection>

						<LargeFooterSection>
							<LargeFooterTitle>
								<button>
									<Link to="/">소셜 미디어</Link>
								</button>
							</LargeFooterTitle>
							<LargeFooterGroup>
								<LargeFooterItems>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">페이스북</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">인스타그램</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">유튜브</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">트위터</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">카카오톡</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">핀터레스트</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">위쳇</Link>
										</div>
									</LargeFooterItem>
									<LargeFooterItem>
										<div className="footer_item_link">
											<Link to="/">웨이보</Link>
										</div>
									</LargeFooterItem>
								</LargeFooterItems>
							</LargeFooterGroup>
						</LargeFooterSection>
					</LargeFooterNav>
					<LargeCopyright>
						<LargeCopyrightTitle>© 2022 GENTLE MONSTER</LargeCopyrightTitle>
						<LargeCopyrightContent>
							<div className="copyright">
								<p className="content1">
									주) 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호:
									119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호
									(사업자 정보 확인) | 이메일 문의: cs@gentlemonster.com |
									개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구
									어울마당로5길 41 | 대표번호: 1600-2126
								</p>
								<p className="content2">
									고객님의 안전한 현금자산 거래를 위하여 하나은행과
									채무지급보증계약을 체결하여 보장해드리고 있습니다. 서비스
									가입사실 확인
								</p>
							</div>
						</LargeCopyrightContent>
					</LargeCopyright>
				</LargeFooterBox>
			)}
		</div>
	);
};

export default Footer;
