import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';

type Props = {};
export default class ListApi extends Component<Props> {
  addData = () => {
    this.props.navigation.navigate('AddData');
  };

  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
      <Header title='List API' icon='ios-arrow-round-back' onPress={this.goBack} />
        <ScrollView>
          <Text style={styles.welcome}>
            Selamat Datang di API List Harga Smartphone
          </Text>
          <Text style={styles.instructions}>
            Disini adalah data-data list harga smartphone
          </Text>
        </ScrollView>
      <Footer onPress={this.addData} title='Tambah' icon='ios-add-circle' />
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
