import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import {
	createAppContainer,
	createSwitchNavigator,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FinanceScene from './scenes/home/finance';
import NewsScene from './scenes/home/news';
import PicturesScene from './scenes/home/pictures';
import RemindersScene from './scenes/home/reminders';
import HomeScene from './scenes/home';
import CalendarScene from './scenes/home/calendar';
import ContactsScene from './scenes/home/contacts';
import CoursesScene from './scenes/home/courses';
import { colors } from './util';

const NewsStack = createStackNavigator({
	News: {
		screen: NewsScene,
		navigationOptions: {
			headerTitle: 'ILA News',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	}
});

const MenuStack = createStackNavigator({
	Courses: {
		screen: CoursesScene,
		navigationOptions: {
			headerTitle: 'Courses',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
	Calendar: {
		screen: CalendarScene,
		navigationOptions: {
			headerTitle: 'Calendar',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
	Contacts: {
		screen: ContactsScene,
		navigationOptions: {
			headerTitle: 'Contacts',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
	Finance: {
		screen: FinanceScene,
		navigationOptions: {
			headerTitle: 'Finance',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
	Reminders: {
		screen: RemindersScene,
		navigationOptions: {
			headerTitle: 'Reminders',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
	Pictures: {
		screen: PicturesScene,
		navigationOptions: {
			headerTitle: 'Pictures',
			headerTintColor: '#fff',
			headerTitleStyle: {
				color: '#fff'
			}
		}
	},
});

const HomeStack = createStackNavigator({
	Home: {
		screen: HomeScene,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: 'ILA Viet Nam',
				headerTintColor: '#fff',
				headerTitleStyle: {
					color: '#fff'
				},
				headerLeft: (
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Image
							style={styles.burger}
							source={require('../assets/images/burger.png')}
							resizeMode="contain"/>
					</TouchableOpacity>
				),
				headerRight: (
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Image
							style={styles.notificationIcon}
							source={require('../assets/images/notification.png')}
							resizeMode="contain"/>
					</TouchableOpacity>
				)
			};
		}
	},
	News: {
		screen: NewsStack,
		navigationOptions: {},
	},
	Menu: {
		screen: MenuStack,
		navigationOptions: {},
	},
}, {
	defaultNavigationOptions: {
		headerBackTitle: null,
		headerStyle: {
			backgroundColor: colors.main,
			borderBottomColor: colors.main
		}
	}
});

const AppDrawerNavigator = createDrawerNavigator({
	Home: {
		screen: HomeStack
	}
});

const AppSwitchNavigator = createSwitchNavigator({
	Home: { screen: AppDrawerNavigator },
}, {
	initialRouteName: 'Home'
});

export default createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
	burger: {
		height: 30,
		width: 30,
		marginLeft: 10
	},
	notificationIcon: {
		height: 30,
		width: 30,
		marginRight: 10
	}
});
