import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import { Card, CardItem, Body } from 'native-base';

import FloatAdd from '../../component/FloatingAdd';
import IconField from '../../component/IconField';
import HeaderAdd from '../../component/HeaderAdd';

type Props = {};
export default class AddDosen extends Component<Props> {
  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
    this.props.navigation.navigate('Dashboard');
  };

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          backgroundColor={'transparent'}
          translucent
      />
        <View style={{ height: 80 }}>
        <HeaderAdd
          iconLeft='ios-arrow-round-back'
          iconRight='ios-refresh'
          onPressLeft={this.goBack}
          title='Tambah Data Tugas'
        />
        </View>
        <ScrollView>
        <Card>
          <CardItem>
            <Body>
              <Text>
                 Tambah Data Tugas
              </Text>
              <IconField
                icon='ios-document'
                placeholder='Nama Matakuliah'
              />
              <IconField
                icon='ios-paper'
                placeholder='Deskripsi'
              />
              <IconField
                icon='ios-time'
                placeholder='Deadline (2018-04-11)'
              />
              <IconField
                icon='ios-calculator-outline'
                placeholder='Kesulitan (1-100)'
              />
            </Body>
          </CardItem>
        </Card>
        </ScrollView>
        <FloatAdd icon='ios-paper-plane' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
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
