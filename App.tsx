import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import UserProvider from './src/contexts/UserContext';
import Routes from './src/routes';
import theme from './src/utils/theme';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar barStyle="light-content" />
			<ThemeProvider theme={theme}>
				<UserProvider>
					<Routes />
				</UserProvider>
			</ThemeProvider>
		</SafeAreaView>
	);
};

export default App;
