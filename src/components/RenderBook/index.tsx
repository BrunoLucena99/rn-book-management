import React from 'react';
import {BookInterface} from '../../types/book';
import RowValue from '../RowValue';
import {BookNameText, Container} from './styles';

interface RenderBookProps {
	book: BookInterface;
}

const RenderBook = ({book}: RenderBookProps) => {
	return (
		<Container>
			<BookNameText>{book.name}</BookNameText>
			<RowValue value={book.author} label="Autor" />
			<RowValue value={book.publishBy} label="Editora" />
			<RowValue value={book.edition} label="Edição" />
		</Container>
	);
};

export default RenderBook;
