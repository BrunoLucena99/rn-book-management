import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import AddBookButton from '../../components/AddBookButton';
import BookModal from '../../components/BookModal';
import EmptyBooksList from '../../components/EmptyBooksList';
import HeaderHome from '../../components/HeaderHome';
import Loading from '../../components/Loading';
import RenderBook from '../../components/RenderBook';
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
				<HeaderHome />
				{!!books && (
					<FlatList
						contentContainerStyle={{flexGrow: 1, marginHorizontal: 15}}
						data={books}
						keyExtractor={(book, index) => `${book.name}-${index}`}
						renderItem={({item, index}) => (
							<TouchableOpacity
								activeOpacity={0.7}
								onPress={() => onSelectedBook(index)}>
								<RenderBook book={item} />
							</TouchableOpacity>
						)}
						ListEmptyComponent={() => <EmptyBooksList onAdd={onOpenModal} />}
					/>
				)}
				<AddBookButton onPress={onOpenModal} />
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
