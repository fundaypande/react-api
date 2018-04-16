import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import Dashboard from './view/Dashboard';
import MyTab from './TabManager';
import Sidebar from './Sidebar.js';
import AddDosen from './api/dosen/AddDosen';
import AddTugas from './api/tugas/AddTugas';
import AddMatkul from './api/matkul/AddMatkul';
import ViewDosen from './api/ViewDosen';

const Screens = DrawerNavigator({
  Login: {
    screen: Login
  },
  AddDosen: {
    screen: AddDosen
  },
  AddTugas: {
    screen: AddTugas
  },
  AddMatkul: {
    screen: AddMatkul
  },
  ViewDosen: {
    screen: ViewDosen
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
