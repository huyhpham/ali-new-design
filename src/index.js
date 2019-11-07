import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui';
import { connect, Provider } from 'react-redux';
import { SafeAreaView } from 'react-navigation';

import AppRoutes from './routes';
import { ruuiStore, appStore } from './store';
import { colors } from './util';

type Props = {
	counter?: string,
	dispatch?: Function,
};

@connect(({ app }) => {
	return {
		counter: app.counter,
	};
})

class App extends Component {
	props: Props;

	componentDidMount() {
		if (utils.isIos) {
			StatusBar.setBarStyle('light-content', true);
		} else if (utils.isAndroid) {
			StatusBar.setBackgroundColor(colors.main);
			StatusBar.setTranslucent(true);
		}
		console.disableYellowBox = true;
	}

	render() {
		return <Fragment>
			<SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
				<View style={styles.container}>
					<AppRoutes/>
				</View>
			</SafeAreaView>
		</Fragment>;
	}
}

function AppContainer(props) {
	return <RuuiProvider store={ruuiStore}>
		<Provider store={appStore}>
			<App/>
		</Provider>

		<Tooltip/>
	</RuuiProvider>;
}

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'ios' ? 0 : 10,
	},
});
