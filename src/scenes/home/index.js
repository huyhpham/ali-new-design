import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import SnapCarousel from '../../components/snapCarousel';
import MenuScene from './menu';

type Props = {

};

class HomeScene extends Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			isBlur: false
		};
	}

	onBlur = () => {
		this.setState(prevState => ({
			isBlur: !prevState.isBlur,
		}));
	};


	render() {
		const { isBlur } = this.state;
		return <View style={{ flex:1, backgroundColor: '#f3f3f3' }}>
			<SnapCarousel/>
			<MenuScene/>
			<ActionButton
				buttonColor="rgba(231,76,60,1)"
				onPress={() => this.onBlur()}
			>
				<ActionButton.Item
					buttonColor="#3498db"
					title="Contacts"
					onPress={() => {}}>
					<Icon name="md-contact" style={styles.actionButtonIcon} />
				</ActionButton.Item>
				<ActionButton.Item
					buttonColor="#1abc9c"
					title="Help"
					onPress={() => {}}>
					<Icon name="md-information-circle" style={styles.actionButtonIcon} />
				</ActionButton.Item>
			</ActionButton>
			{/*{isBlur ? }*/}
		</View>;
	}
}

export default HomeScene;

const styles = StyleSheet.create({
	actionButtonIcon: {
		fontSize: 25,
		height: 22,
		color: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	},
});
