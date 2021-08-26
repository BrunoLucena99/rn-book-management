import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../pages/Login';
import RegisterUserPage from '../pages/RegisterUser';
import {RootStackParamList} from '../types/navigation';

const Routes = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Login" component={LoginPage} />
				<Stack.Screen name="RegisterUser" component={RegisterUserPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
