import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class RemindersScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>RemindersScene</Text>
		</View>;
	}
}

export default RemindersScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
