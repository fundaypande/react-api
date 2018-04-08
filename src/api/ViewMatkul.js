import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import FloatAdd from '../component/FloatingAdd';

type Props = {};
export default class ViewMatkul extends Component<Props> {
  addData = () => {
    this.props.navigation.navigate('AddData');
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
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
