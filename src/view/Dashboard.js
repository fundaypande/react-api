import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Alert
 } from 'react-native';

import HeaderKu from '../component/Header';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }

  togleDrawer = () => {
    this.props.navigation.navigate('DrawerToggle');
  }
  addData = () => {
    Alert.alert(
  'Tambah Data',
  '',
      [
        { text: 'Tugas', onPress: () => console.log('Ask me later pressed') },
        { text: 'Mata Kuliah', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Dosen', onPress: () => this.props.navigation.navigate('AddDosen') },
      ],
      { cancelable: true }
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor={'transparent'}
          translucent
      />
      <StatusBar
          backgroundColor={'transparent'}
          translucent
      />
        <View style={{ flex: 1 }}>
        <HeaderKu
          iconLeft='ios-menu'
          iconRight='ios-add'
          onPressLeft={this.togleDrawer}
          onPressRight={this.addData}
          title='halooohaaa'
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
AppRegistry.registerComponent('AppForm2', () => Login);
