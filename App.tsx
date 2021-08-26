import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import LoginPage from './src/pages/Login';
import theme from './src/utils/theme';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar barStyle="light-content" />
			<ThemeProvider theme={theme}>
				<LoginPage />
			</ThemeProvider>
		</SafeAreaView>
	);
};

export default App;
