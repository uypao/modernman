import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import StackNavigation from '../stack/StackNavigation';
import Sidebar from '../../components/common/Sidebar';

const routeConfiguration = DrawerNavigator({
  Welcome: { screen: StackNavigation }
}, {
  contentComponent: props => <Sidebar {...props} />
});

export const Drawer = routeConfiguration;
