import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
	flex-grow: 1;
	background: ${({theme}) => theme.colors.background};
	padding: ${({theme}) => `15px ${theme.spacings.padding.horizontal}`};
`;

export const Title = styled.Text`
	font-size: 24px;
	font-family: Montserrat-Bold;
	color: ${({theme}) => theme.colors.bold};
`;

export const DescriptionText = styled.Text`
	font-size: 16px;
	font-family: Montserrat-Regular;
	color: ${({theme}) => theme.colors.bold};
`;

export const FormContainer = styled.View`
	margin-top: 15px;
	padding: 10px 0px;
`;

export const InputWrapper = styled.View`
	margin-bottom: 10px;
`;

export const Footer = styled.View`
	background: ${({theme}) => theme.colors.background};
`;
