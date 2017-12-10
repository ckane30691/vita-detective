import React from 'react';
import ReactNavigation from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import Root from './root';
import Test from './test';

const MyStackNavigator = StackNavigator({
    home: {screen: Root},
    vitaIndex: {screen: Test}
});

export default MyStackNavigator