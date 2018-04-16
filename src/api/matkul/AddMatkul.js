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
      nama: '',
      sks: '',
      jadwal: '',
      dosen: '',
    };
  }

  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
    this.props.navigation.navigate('Dashboard');
  };

  InputMatkul = () => {
    const nama = this.state.nama;
    const sks = this.state.sks;
    const jadwal = this.state.jadwal;
    const dosen = 'dosen';
    fetch('http://api.ifreethink.net/fundaypande/insertMatkul.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        nama: nama,
        sks: sks,
        jadwal: jadwal,
        dosen: dosen
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
          title='Tambah Data Mata Kuliah'
        />
        </View>
        <ScrollView>
          <View style={styles.body}>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Tambah Data Mata Kuliah
                </Text>
                <IconField
                  icon='ios-document'
                  placeholder='Nama Matakuliah'
                  onChangeText={TextInputValue => this.setState({ nama: TextInputValue })}
                />
                <IconField
                  icon='ios-time'
                  placeholder='SKS'
                  onChangeText={TextInputValue => this.setState({ sks: TextInputValue })}
                />
                <IconField
                  icon='ios-calendar'
                  placeholder='Hari'
                  onChangeText={TextInputValue => this.setState({ jadwal: TextInputValue })}
                />
              </Body>
            </CardItem>
          </Card>
          </View>
        </ScrollView>
        <FloatAdd icon='ios-paper-plane' onPress={this.InputMatkul} />
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
