export interface BookInterface {
	author: string;
	publishBy: string;
	name: string;
	edition: string;
	id: string;
}

export interface NewBookProps extends Omit<BookInterface, 'id'> {}
