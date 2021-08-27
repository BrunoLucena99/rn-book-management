import styled from 'styled-components/native';

const DEFAULT_SIZE = 80;

interface AvatarProps {
	size?: number;
}

export const MainContainer = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.colors.background};
	padding: ${({theme}) => `10px ${theme.spacings.padding.horizontal}`};
`;

export const PageTitle = styled.Text`
	font-family: Montserrat-SemiBold;
	color: ${({theme}) => theme.colors.bold};
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
`;

export const ProfileContainer = styled.View`
	margin-top: 20px;
	justify-content: center;
	align-items: center;
`;

export const UserAvatarContainer = styled.View<AvatarProps>`
	height: ${({size}) => size ?? DEFAULT_SIZE}px;
	width: ${({size}) => size ?? DEFAULT_SIZE}px;
	background-color: ${({theme}) => theme.colors.white};
	align-self: center;
	border-radius: ${({size}) => (size ?? DEFAULT_SIZE) / 2}px;
	elevation: 3;
	justify-content: center;
	align-items: center;
`;

export const Avatar = styled.Image<AvatarProps>`
	width: 100%;
	height: 100%;
	border-radius: ${({size}) => (size ?? DEFAULT_SIZE) / 2}px;
`;

export const NameText = styled.Text`
	font-size: 20px;
	font-family: Montserrat-SemiBold;
	text-align: center;
	margin-top: 20px;
`;

export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
`;
