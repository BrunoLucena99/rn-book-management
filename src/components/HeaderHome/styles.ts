import styled from 'styled-components/native';

export const Container = styled.View`
	background: ${({theme}) => theme.colors.primary};
	min-height: 80px;
	padding: ${({theme}) => `30px ${theme.spacings.padding.horizontal}`};
	justify-content: center;
	align-items: center;
`;

export const TextHeader = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.white};
	font-size: 18px;
`;

export const ProfileButton = styled.TouchableOpacity`
	position: absolute;
	top: 5px;
	right: 5px;
`;
