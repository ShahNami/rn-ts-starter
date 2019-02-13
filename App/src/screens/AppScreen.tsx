/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import App from '../components/app/App';

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

class AppScreen extends React.Component<LocalProps, LocalState> {
	constructor(props: LocalProps) {
		super(props);
	}

	public render() {
		return (
			<App/>
		);
	}
}

export default AppScreen;