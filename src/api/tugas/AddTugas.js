import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert
} from 'react-native';

import { Card, CardItem, Body } from 'native-base';

import FloatAdd from '../../component/FloatingAdd';
import IconField from '../../component/IconField';
import HeaderAdd from '../../component/HeaderAdd';

type Props = {};
export default class AddDosen extends Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      matakuliah: '',
      deskripsi: '',
      deadline: '',
      kesulitan: '',
      status: ''
    };
  }

  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
    this.props.navigation.navigate('Dashboard');
  };

  InputTugas = () => {
    const matakuliah = this.state.matakuliah;
    const deskripsi = this.state.deskripsi;
    const deadline = this.state.deadline;
    const kesulitan = this.state.kesulitan;
    const status = '0';
    fetch('http://api.ifreethink.net/fundaypande/insertTugas.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        matakuliah: matakuliah,
        deskripsi: deskripsi,
        deadline: deadline,
        kesulitan: kesulitan,
        status: status
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
        Alert.alert('errrorrr');
      })
  }

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
                onChangeText={TextInputValue => this.setState({ matakuliah: TextInputValue })}
              />
              <IconField
                icon='ios-paper'
                placeholder='Deskripsi'
                onChangeText={TextInputValue => this.setState({ deskripsi: TextInputValue })}
              />
              <IconField
                icon='ios-time'
                placeholder='Deadline (2018-04-11)'
                onChangeText={TextInputValue => this.setState({ deadline: TextInputValue })}
              />
              <IconField
                icon='ios-calculator-outline'
                placeholder='Kesulitan (1-100)'
                onChangeText={TextInputValue => this.setState({ kesulitan: TextInputValue })}
              />
            </Body>
          </CardItem>
        </Card>
        </ScrollView>
        <FloatAdd icon='ios-paper-plane' onPress={this.InputTugas} />
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
