import {useCallback, useEffect, useState} from 'react';
import {BookInterface, NewBookProps} from '../../types/book';
import {
	addBookToUser,
	editBookToUser,
	getBooksByUserUid,
	removeUserBook,
} from '../../utils/firestoreFunctions';

const useBooks = (userUid: string, immediate: boolean = false) => {
	const [isSearchingBooks, setIsSearchingBooks] = useState(false);
	const [books, setBooks] = useState<BookInterface[] | null>(null);

	const getUserBooks = useCallback(async () => {
		try {
			setIsSearchingBooks(true);
			const booksAux = await getBooksByUserUid(userUid);
			setBooks(booksAux);
		} catch (err) {
			console.log(err);
		} finally {
			setIsSearchingBooks(false);
		}
	}, [userUid]);

	const addBook = async (book: NewBookProps) => {
		try {
			await addBookToUser(userUid, book);
			await getUserBooks();
		} catch (error) {
			throw error;
		}
	};

	const editBook = async (book: BookInterface) => {
		try {
			await editBookToUser(userUid, book);
			const mappedBooks = books!.map(item =>
				item.id === book.id ? book : item,
			);
			setBooks(mappedBooks);
		} catch (error) {
			throw error;
		}
	};

	const removeBook = async (bookId: string) => {
		try {
			await removeUserBook(userUid, bookId);
			const filteredBooks = books!.filter(book => book.id !== bookId);
			setBooks(filteredBooks);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		if (immediate && !books) {
			getUserBooks();
		}
	}, [immediate, getUserBooks, books]);

	return {
		getUserBooks,
		books,
		isSearching: isSearchingBooks,
		addBook,
		editBook,
		removeBook,
	};
};

export default useBooks;
