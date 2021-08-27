import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
	flex: 1;
	margin-bottom: 10px;
`;

export const Header = styled.View`
	background: ${({theme}) => theme.colors.primary};
	min-height: 50px;
	padding: ${({theme}) => `20px ${theme.spacings.padding.horizontal}`};
	justify-content: center;
	align-items: center;
`;

export const TextHeader = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.white};
	font-size: 18px;
`;
