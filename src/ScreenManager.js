import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import Dashboard from './view/Dashboard';
import MyTab from './TabManager';
import Sidebar from './Sidebar.js';

const Screens = DrawerNavigator({
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Dashboard: {
    screen: Dashboard
  },
  MyTab: {
    screen: MyTab
  },

},
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default Screens;
