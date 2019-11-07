import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class CalendarScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>CalendarScene</Text>
		</View>;
	}
}

export default CalendarScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
