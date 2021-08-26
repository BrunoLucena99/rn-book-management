import React from 'react';
import {FlatList, Text} from 'react-native';
import EmptyBooksList from '../../components/EmptyBooksList';
import Loading from '../../components/Loading';
import useBooks from '../../hooks/useBooks';
import {HomePageProps} from '../../types/navigation';
import {MainContainer} from './styles';

const HomePage = ({route}: HomePageProps) => {
	const {books, isSearching} = useBooks(route.params.userUid, true);

	if (isSearching) {
		return <Loading />;
	}

	return (
		<MainContainer>
			{!!books && (
				<FlatList
					contentContainerStyle={{flexGrow: 1}}
					data={books}
					keyExtractor={(book, index) => `${book.name}-${index}`}
					renderItem={() => <Text>Book</Text>}
					ListEmptyComponent={EmptyBooksList}
				/>
			)}
		</MainContainer>
	);
};

export default HomePage;