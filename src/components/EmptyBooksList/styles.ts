import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background: ${({theme}) => theme.colors.background};
	padding: ${({theme}) => `0px ${theme.spacings.padding.horizontal}`};
	justify-content: center;
	align-items: center;
`;

export const Title = styled.Text`
	font-family: Montserrat-Bold;
	color: ${({theme}) => theme.colors.bold};
	font-size: 20px;
	text-align: center;
`;

export const RegisterBooksBtn = styled.TouchableOpacity`
	margin-top: 20px;
`;

export const RegisterBookText = styled.Text`
	font-family: Montserrat-Regular;
	color: ${({theme}) => theme.colors.bold};
	font-size: 16px;
	text-align: center;
`;
