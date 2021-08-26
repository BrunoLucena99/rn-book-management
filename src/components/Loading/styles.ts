import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
	flex: 1;
	background: transparent;
	align-items: center;
	justify-content: center;
	padding: ${({theme}) => `0px ${theme.spacings.padding.horizontal}`};
`;

export const Text = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
	font-size: 16px;
	margin-top: 10px;
	text-align: center;
`;
