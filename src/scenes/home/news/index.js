import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class NewsScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>NewsScene</Text>
		</View>;
	}
}

export default NewsScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
