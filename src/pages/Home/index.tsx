import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import AddBookButton from '../../components/AddBookButton';
import EmptyBooksList from '../../components/EmptyBooksList';
import HeaderHome from '../../components/HeaderHome';
import Loading from '../../components/Loading';
import RenderBook from '../../components/RenderBook';
import useBooks from '../../hooks/useBooks';
import {BookInterface} from '../../types/book';
import {HomePageProps} from '../../types/navigation';
import {MainContainer} from './styles';

const HomePage = ({route, navigation}: HomePageProps) => {
	const {books, isSearching, addBook, editBook, removeBook} = useBooks(
		route.params.userUid,
		true,
	);

	const goToManageBookPage = (book?: BookInterface) => {
		navigation.navigate('ManageBook', {
			book,
			onAdd: addBook,
			onEdit: editBook,
			onRemove: removeBook,
		});
	};

	if (isSearching) {
		return <Loading />;
	}

	return (
		<>
			<MainContainer>
				<HeaderHome />
				{!!books && (
					<FlatList
						contentContainerStyle={{flexGrow: 1, marginHorizontal: 15}}
						data={books}
						keyExtractor={(book, index) => `${book.name}-${index}`}
						renderItem={({item}) => (
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => goToManageBookPage(item)}>
								<RenderBook book={item} />
							</TouchableOpacity>
						)}
						ListEmptyComponent={() => (
							<EmptyBooksList onAdd={() => goToManageBookPage()} />
						)}
					/>
				)}
				<AddBookButton onPress={() => goToManageBookPage()} />
			</MainContainer>
		</>
	);
};

export default HomePage;
