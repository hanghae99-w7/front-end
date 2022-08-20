import styled from 'styled-components';
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
	LargeFooterBox,
	LargeFooterNav,
	LargeFooterSection,
	LargeFooterTitle,
	LargeFooterGroup,
	LargeFooterItems,
	LargeFooterItem,
	LargeCopyright,
} from './Footer.styled';

const Footer = () => {
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 770px)',
	});

	// {isSmallScreen ? '작은거' : '큰거';}

	return (
		<div>
			{isSmallScreen ? (
				<SmallFooterBox>
					<SmallFooterNav>
						<SmallFooterSection>
							<SmallFooterTitle>
								<button>
									<Link to="/">고객서비스</Link>
									<span>+</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup>
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
									<span>+</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup>
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
									<span>+</span>
								</button>
							</SmallFooterTitle>
							<SmallFooterGroup>
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

					<SmallCopyright></SmallCopyright>
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
						<p class="copyright">© 2022 GENTLE MONSTER</p>
        <div>
          
        </div>
          </LargeCopyright>
				</LargeFooterBox>
			)}
		</div>
	);
};

export default Footer;
