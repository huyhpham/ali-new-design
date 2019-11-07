import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class PicturesScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>PicturesScene</Text>
		</View>;
	}
}

export default PicturesScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
