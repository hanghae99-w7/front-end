import styled from 'styled-components';

export const ServiceBoxWrap = styled.div`
	display: block;
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;
export const ServiceBoxContainer = styled.div`
	max-width: 440px;
	margin: 60px auto 174px;
	display: block;
	text-align: left;

	.service1 {
		margin-bottom: 28px;
		font-size: 25px;
		font-family: 'AppleSDGothicNeoN';
		text-align: center;
	}
	.service2 {
		margin-bottom: 40px;
		font-size: 16px;
		font-family: 'AppleSDGothicNeoN';
		text-align: center;
		line-height: 24px;
		color: #343434;
	}
`;

export const TitleInput = styled.div`
	input {
		width: 100%;
		display: block;
		font-size: 13px;
		line-height: 33px;
		border: 1px solid #000;
		border-radius: 0mm;
		height: 40px !important;
		letter-spacing: 0.05em;
		margin-bottom: 20px;
	}

	.serviceTitle {
		margin-bottom: 9px;
		font-size: 14px;
	}

	input:focus {
		outline: none;
	}
`;

export const ContentInput = styled.div`
	textarea {
		width: 100%;
		display: block;
		font-size: 13px;
		line-height: 20px;
		border: 1px solid #000;
		border-radius: 0mm;
		height: 100px !important;
		letter-spacing: 0.05em;
		resize: none;
		margin-bottom: 20px;
	}

	.serviceContent {
		margin-bottom: 9px;
		font-size: 14px;
	}

	textarea {
		line-height: 18px;
		font-family: 'AppleSDGothicNeoM';
	}
	textarea:focus {
		outline: none;
	}
`;

export const ServiceListContainer = styled.div`
	margin-top: 15px;
`;

export const ServiceListBox = styled.div`
	border-bottom: 1px solid #e0e0e0;
`;

export const ServiceListTitle = styled.div`
	color: #343434;
	margin-bottom: 30px;

	button {
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
		&:hover {
			cursor: pointer;
		}
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
	margin-top: 20px;
	margin-bottom: 20px;
	font-size: 14px;
	line-height: 20px;
	color: #343434;
`;

export const MainVideoWrap = styled.div`
	position: relative;
	width: 100%;
	min-height: 600px;
	height: calc(100vh - 250px);
	background-color: #000;
	overflow: hidden;
`;

export const ServiceVideoBox = styled.video`
	width: 100%;
	height: 100vw;
	object-fit: cover;
	display: block;
`;

export const ServiceVideoH1 = styled.div`
	z-index: 999;
	position: absolute;
	text-align: center;
	width: 100%;
	height: 100px;
	top: 43%;
	bottom: 0%;
`;

export const VideoH1 = styled.h1`
	font-size: 22px;
	word-spacing: 0px;
	margin-bottom: 10px;
	color: white;
`;

export const SmallServiceVideoH1 = styled.div`
	z-index: 999;
	position: absolute;
	text-align: center;
	width: 100%;
	height: 100px;
	top: 40%;
	bottom: 0%;
`;

export const SmallVideoH1 = styled.div`
	font-size: 20px;
	word-spacing: 0px;
	margin-bottom: 10px;
	color: white;
	line-height: 30px;
`;

export const SmallMainVideoWrap = styled.div`
	position: relative;
	width: 100%;
	min-height: 600px;
	background-color: #000;
	overflow: hidden;
`;

export const SmallServiceVideoBox = styled.video`
	width: 100%;
	height: auto;
	background-size: auto;
	display: block;
`;
