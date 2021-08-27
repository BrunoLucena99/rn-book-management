import React from 'react';
import {CloseButton} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import theme from '../../utils/theme';

interface GoBackProps {
	onPress: () => void;
	color?: keyof typeof theme.colors;
}

const GoBack = ({onPress, color}: GoBackProps) => {
	const {colors} = useTheme();

	return (
		<CloseButton onPress={onPress}>
			<MaterialCommunityIcons
				name="arrow-left"
				color={colors[color ?? 'bold']}
				size={26}
			/>
		</CloseButton>
	);
};

export default GoBack;
