import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class CoursesScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>CoursesScene</Text>
		</View>;
	}
}

export default CoursesScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
