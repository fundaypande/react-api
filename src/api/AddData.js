import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import Header from '../component/Header';
import Footer from '../component/Footer';

type Props = {};
export default class ListApi extends Component<Props> {
  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
      <Header title='Tambah Data' icon='ios-arrow-round-back' onPress={this.goBack} />
        <ScrollView>
          <Text style={styles.welcome}>
            Tambah Data Smartphone
          </Text>
          <TextInput
            placeholder="Masukkan Merek HP"
          />
          <TextInput
            placeholder="Masukkan Tipe HP"
          />
          <TextInput
            placeholder="Masukkan Harga"
            keyboardType='numeric'
          />
        </ScrollView>
      <Footer onPress={this.saveData} title='Simpan' icon='ios-checkmark-circle' />
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
