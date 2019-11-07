import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

type Props = {

};

class MenuScene extends Component {
	props: Props;

	render() {
		return <View style={styles.container}>
			<Text style={styles.menuText}>Menu</Text>
			<Swiper
				style={styles.wrapperContainer}
				showsPagination={false}
			>
				<View style={styles.menuSceneContainer}>
					<View style={styles.functionContainer}>
						<TouchableOpacity style={styles.functionTextContainer}>
							<View>
								<Text>
									Courses
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.functionTextContainer, { borderRightWidth: 0 }]}>
							<View>
								<Text>
									Calendar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.functionContainer}>
						<TouchableOpacity style={styles.functionTextContainer}>
							<View>
								<Text>
									Reminder
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.functionTextContainer, { borderRightWidth: 0 }]}>
							<View>
								<Text>
									Pictures
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={[styles.functionContainer, { borderBottomWidth: 0 }]}>
						<TouchableOpacity style={styles.functionTextContainer}>
							<View>
								<Text>
									Finance
								</Text>
							</View>
						</TouchableOpacity>
						<View style={[styles.functionTextContainer, { borderRightWidth: 0 }]}>
							<Text/>
						</View>
					</View>
				</View>
				{/*<View>*/}
					{/*<Text>One</Text>*/}
				{/*</View>*/}
				{/*<View>*/}
					{/*<Text>Two</Text>*/}
				{/*</View>*/}
			</Swiper>
		</View>;
	}
}

export default MenuScene;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#fff'
	},
	wrapperContainer: {
		marginLeft: 10,
	},
	menuSceneContainer: {
		flex: 1,
	},
	menuText: {
		fontSize: 25,
		fontWeight: '600',
		marginBottom: 10,
		color: '#222',
		marginLeft: 10,
	},
	functionContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: '#eee',
		borderBottomWidth: 1,
	},
	functionTextContainer: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#eee',
		borderRightWidth: 1,
		// borderBottomWidth: 1,
	},
});
