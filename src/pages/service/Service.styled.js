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
	margin: 100px auto 174px;
	display: block;
	text-align: left;

  .service {
    margin-bottom: 28px;
    font-size: 15px;
}
`;

export const TitleInput = styled.div`
	input {
		margin-top: 15px;
		width: 100%;
		display: block;
		font-size: 13px;
		line-height: 33px;
		border: 1px solid #000;
		border-radius: 0mm;
		height: 40px !important;
		letter-spacing: 0.05em;
	}
	input:focus {
		outline: none;
	}
`;

export const ContentInput = styled.div`
	textarea {
		margin-top: 15px;
		width: 100%;
		display: block;
		font-size: 13px;
		line-height: 20px;
		border: 1px solid #000;
		border-radius: 0mm;
		height: 100px !important;
		letter-spacing: 0.05em;
    resize: none;
	}
	textarea:focus {
		outline: none;
	}
`;