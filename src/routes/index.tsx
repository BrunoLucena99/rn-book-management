import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../pages/Login';
import RegisterUserPage from '../pages/RegisterUser';
import {RootStackParamList} from '../types/navigation';
import {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import HomePage from '../pages/Home';

const Routes = () => {
	const Stack = createNativeStackNavigator<RootStackParamList>();
	const {user} = useContext(UserContext);

	console.log(user);

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				{!user ? (
					<>
						<Stack.Screen name="Login" component={LoginPage} />
						<Stack.Screen name="RegisterUser" component={RegisterUserPage} />
					</>
				) : (
					<Stack.Screen name="Home" component={HomePage} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
