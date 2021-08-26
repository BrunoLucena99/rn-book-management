import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes';
import theme from './src/utils/theme';

const App = () => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar barStyle="light-content" />
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</SafeAreaView>
	);
};

export default App;
