import styled from 'styled-components';

export const ServiceListBox = styled.div`
  border-bottom: 1px solid #e0e0e0;
	margin-top: 20px;
`;

export const ServiceListTitle = styled.div`
	color: #343434;

	.serviceContentTitle {
		font-family: 'AppleSDGothicNeoM';
    &:hover{
      cursor: pointer;
    }
	}

	.serviceContentBox {
		margin: 18px 0px;
	}

	.deleteBtn {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		width: 100%;
		border: none;
		background: none;
		padding: 14px 0 14px;
		font-size: 16px;
		font-family: 'AppleSDGothicNeoM';
	}

	.serviceSub {
		color: #6e6e6e;
		letter-spacing: -0.3px;
		font-size: 12px;
		float: right;
		align-items: center;
		margin-top: -20px;

		.serviceUser {
			float: right;
			margin-top: 7px;
		}
		.serviceDate {
			float: right;
			margin: 7px 5px 0px 17px;
		}
		input {
			margin-top: 6px;
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
  display: none;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #343434;
`;
