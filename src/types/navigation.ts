import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
	RegisterUser?: {email?: string; password?: string};
	Login: undefined;
	Home: {userUid: string};
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
