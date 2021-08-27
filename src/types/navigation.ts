import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookInterface, NewBookProps} from './book';

export type RootStackParamList = {
	RegisterUser?: {email?: string; password?: string};
	Login: undefined;
	Home: {userUid: string};
	ManageBook: {
		book?: BookInterface;
		onAdd: (newBook: NewBookProps) => Promise<void>;
		onEdit: (book: BookInterface) => Promise<void>;
		onRemove: (bookId: string) => Promise<void>;
	};
};

export type LoginPageProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export type RegisterUserProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterUser'>;
	route: RouteProp<RootStackParamList, 'RegisterUser'>;
};

export type HomePageProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
	route: RouteProp<RootStackParamList, 'Home'>;
};

export type ManageBookProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'ManageBook'>;
	route: RouteProp<RootStackParamList, 'ManageBook'>;
};
