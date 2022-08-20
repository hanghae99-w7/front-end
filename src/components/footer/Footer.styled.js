import styled from 'styled-components';

// Small
export const SmallFooterBox = styled.div`
	text-align: center;
	font-size: 30px;
	background-color: black;
	color: white;
	width: 100%;
	height: auto;
	padding: 15px 0px 70px 0px;
	background-color: #f7f7f7;
`;

export const SmallFooterNav = styled.div`
	display: block;
	word-break: keep-all;
	box-sizing: border-box;
	line-height: normal;
	padding: 0px 15px;
`;

// keep all / break all (word break)
export const SmallFooterSection = styled.div`
  max-width: 100%;
	width: 100%;
	word-break: break-all;

  // border가 안으로 생김
  box-sizing: border-box;
	line-height: normal;
	color: #343434;
  border-bottom: 1px solid #e0e0e0;
`;

export const SmallFooterTitle = styled.div`
	font-size: 13px;
	padding-bottom: 16px;
	color: #343434;


	button {
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		background: none;

		-webkit-appearance: none;
		outline: none !important;
		padding: 14px 0 15px;
	}

	span {
		color: #343434;
		letter-spacing: -0.3px;
		display: inline-block;
	}

	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #343434;
	}
`;

export const SmallFooterGroup = styled.div``;

export const SmallFooterItems = styled.div``;

export const SmallFooterItem = styled.div`
	padding: 3px 0 4px;
	box-sizing: border-box;
	line-height: normal;
	color: #858585;
	font-size: 13px;
	text-align: left;
	padding-bottom: 16px;
	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #858585;
	}
`;
export const SmallCopyright = styled.div``;



// Large

export const LargeFooterBox = styled.div`
	text-align: center;
	font-size: 30px;
	background-color: black;
	color: white;
	width: 100%;
	height: auto;
	padding: 56px 60px 32px;
	background-color: #f7f7f7;
`;

export const LargeFooterNav = styled.div`
	display: flex;
	word-break: keep-all;
	box-sizing: border-box;
	line-height: normal;
`;

export const LargeFooterSection = styled.div`
	max-width: 303px;
	width: 100%;
	word-break: break-all;
	box-sizing: border-box;
	line-height: normal;
	color: #343434;
`;

export const LargeFooterTitle = styled.div`
	font-size: 13px;
	padding-bottom: 16px;
	text-align: left;
	color: #343434;

	button {
		border: none;
		background: none;
		-webkit-appearance: none;
		outline: none !important;
		padding: 0;
		pointer-events: none;
	}

	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #343434;
	}
`;

export const LargeFooterGroup = styled.div``;

export const LargeFooterItems = styled.div``;

export const LargeFooterItem = styled.div`
	padding: 3px 0 4px;
	box-sizing: border-box;
	line-height: normal;
	color: #858585;
	font-size: 13px;
	text-align: left;

	a:link {
		text-decoration: none;
	}
	a:visited {
		text-decoration: none;
		color: #858585;
	}
`;

export const LargeCopyright = styled.div`
	padding: 75px 0 0 0;
	color: #343434;

	.copyright {
		font-size: 11px;
		word-break: keep-all;
		display: block;
	}

	.font_title {
		min-width: 250px;
		max-width: 250px;
		font-size: 15px;
		font-weight: normal;
	}

	.content {
	}
`;
