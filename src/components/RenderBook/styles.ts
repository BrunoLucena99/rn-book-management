import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	elevation: 2;
	background: ${({theme}) => theme.colors.white};
	padding: 20px 10px;
	margin-top: 20px;
	border-radius: 5px;
`;

export const BookNameText = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
	font-size: 18px;
`;
