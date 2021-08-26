import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
	RegisterUser?: {email?: string; password?: string};
	Login: undefined;
	Home: undefined;
};

export type LoginPageProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export type RegisterUserProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'RegisterUser'>;
	route: RouteProp<RootStackParamList, 'RegisterUser'>;
};
