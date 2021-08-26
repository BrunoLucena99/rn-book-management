import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import BookModal from '../../components/BookModal';
import EmptyBooksList from '../../components/EmptyBooksList';
import Loading from '../../components/Loading';
import useBooks from '../../hooks/useBooks';
import {BookInterface} from '../../types/book';
import {HomePageProps} from '../../types/navigation';
import {MainContainer} from './styles';

const HomePage = ({route}: HomePageProps) => {
	const {books, isSearching, addBook, editBook, removeBook} = useBooks(
		route.params.userUid,
		true,
	);
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedBook, setSelectedBook] = useState<BookInterface | null>(null);

	const onCloseModal = () => {
		setModalVisible(false);
		setSelectedBook(null);
	};

	const onOpenModal = () => setModalVisible(true);

	const onSelectedBook = (index: number) => {
		if (books) {
			const bookAux = books[index];
			setSelectedBook(bookAux);
			onOpenModal();
		} else {
			setSelectedBook(null);
		}
	};

	if (isSearching) {
		return <Loading />;
	}

	return (
		<>
			<MainContainer>
				{!!books && (
					<FlatList
						contentContainerStyle={{flexGrow: 1}}
						data={books}
						keyExtractor={(book, index) => `${book.name}-${index}`}
						renderItem={({item, index}) => (
							<TouchableOpacity onPress={() => onSelectedBook(index)}>
								<Text>{item.name}</Text>
							</TouchableOpacity>
						)}
						ListEmptyComponent={() => <EmptyBooksList onAdd={onOpenModal} />}
					/>
				)}
			</MainContainer>
			{modalVisible && (
				<BookModal
					onRemoveBook={removeBook}
					onEditBook={editBook}
					onAddBook={addBook}
					onCloseRequest={onCloseModal}
					book={selectedBook}
				/>
			)}
		</>
	);
};

export default HomePage;
