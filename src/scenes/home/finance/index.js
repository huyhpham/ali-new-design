import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class FinanceScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>FinanceScene</Text>
		</View>;
	}
}

export default FinanceScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
