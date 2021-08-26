import React from 'react';
import {Text} from 'react-native';
import useBooks from '../../hooks/useBooks';
import {HomePageProps} from '../../types/navigation';
import {MainContainer} from './styles';

const HomePage = ({route}: HomePageProps) => {
	const {books} = useBooks(route.params.userUid, true);

	return (
		<MainContainer>
			<Text>Home page</Text>
			{books &&
				books.map(book => {
					return <Text>{JSON.stringify(book)}</Text>;
				})}
		</MainContainer>
	);
};

export default HomePage;
