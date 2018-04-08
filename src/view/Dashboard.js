import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text
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
          iconRight='ios-refresh'
          onPressLeft={this.togleDrawer}
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
