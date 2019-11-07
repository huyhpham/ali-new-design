import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

type Props = {

};

class ContactsScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text>ContactsScene</Text>
		</View>;
	}
}

export default ContactsScene;

const styles = StyleSheet.create({
	container: {
		flex: 1, alignItems: 'center', justifyContent: 'center',
	},
});
