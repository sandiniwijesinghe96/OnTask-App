import React from 'react';

import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomDrawer from '../components/CustomDrawer';
import Dashboard from '../views/Dashboard';
import Tasks from '../views/Tasks';
import Groups from '../views/Groups/Groups';
import Group from '../views/Group/Group';
import Profile from '../views/Profile/Profile';
import OnTaskWeb from '../views/OnTaskWeb'

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    Tasks: {
      screen: Tasks,
    },
    Profile: {
      screen: Profile,
    },
    Groups: {
      screen: Groups,
    },
    Group: {
      screen: Group,
    },
    OnTaskWeb: {
      screen: OnTaskWeb,
    },
  },
  {
    initialRoute: 'Dashboard',
    drawerPosition: 'left',
    drawerIcon: () => {
      return <Icon name="user" size={20} />;
    },
    contentComponent: CustomDrawer,
    navigationOptions: {
      header: null,
    },
    drawerOpenRoute: 'drawerOpen',
    drawerCloseRoute: 'drawerClose',
    drawerToggleRoute: 'drawerToggle',
  },
);

export default MyDrawerNavigator;
