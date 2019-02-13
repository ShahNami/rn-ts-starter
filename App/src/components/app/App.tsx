/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';

import { Platform, Text, View } from 'react-native';

import { AppStyle } from '../../styles/Styles';

interface StoreProps {
	empty?: null;
}

interface DispatchProps {
	empty?: null;
}

interface OwnProps {
	empty?: null;
}

type LocalProps = StoreProps & DispatchProps & OwnProps;

interface LocalState {
	empty?: null;
}

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu'
});

class App extends React.Component<LocalProps, LocalState> {
	constructor(props: LocalProps) {
		super(props);
	}

	public render() {
		return (
			<View style={AppStyle.container}>
				<Text style={AppStyle.welcome}>Welcome to React Native!</Text>
				<Text style={AppStyle.instructions}>This is a TypeScript Boilerplate</Text>
				<Text style={AppStyle.instructions}>To get started, edit App.tsx</Text>
				<Text style={AppStyle.instructions}>{instructions}</Text>
			</View>
		);
	}
}

export default App;