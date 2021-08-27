import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
	flex-grow: 1;
	background: ${({theme}) => theme.colors.background};
	padding: ${({theme}) => `15px ${theme.spacings.padding.horizontal}`};
`;

export const Title = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
	font-size: 20px;
	text-align: center;
`;

export const FormContainer = styled.ScrollView`
	margin: 30px 0px;
	width: 100%;
`;

export const Wrapper = styled.View`
	margin-top: 10px;
`;

export const BtnWrapper = styled.View`
	margin-top: 30px;
`;
