import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background: ${({theme}) => theme.colors.white};
	bottom: 0;
	position: absolute;
	width: 100%;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	padding: ${({theme}) => `10px ${theme.spacings.padding.horizontal}`};
	align-items: center;
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
