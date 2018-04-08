import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import FloatAdd from '../../component/FloatingAdd';
import HeaderAdd from '../../component/HeaderAdd';

type Props = {};
export default class AddDosen extends Component<Props> {
  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor={'transparent'}
          translucent
      />
        <View style={{ flex: 1 }}>
        <HeaderAdd
          iconLeft='ios-menu'
          iconRight='ios-refresh'
          onPressLeft={this.togleDrawer}
          title='halooohaaa'
        />
        </View>
        <ScrollView>
          <Text style={styles.welcome}>
            Tambah Dosen
          </Text>
        </ScrollView>
        <FloatAdd />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
