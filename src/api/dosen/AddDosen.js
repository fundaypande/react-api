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
      dosen: '',
    };
  }

  InputDosen = () => {
    const { dosen } = this.state;
    fetch('http://api.ifreethink.net/fundaypande/insertDosen.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        nama: dosen
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
        Alert.alert('errrorrr');
      })
  }

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
          title='Tambah Data Dosen'
        />
        </View>
        <ScrollView>
          <View style={styles.body}>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Tambah Data Dosen
                </Text>
                <IconField
                  icon='ios-person'
                  placeholder='Nama Dosen'
                  onChangeText={TextInputValue => this.setState({ dosen: TextInputValue })}
                />
              </Body>
            </CardItem>
          </Card>
          </View>
        </ScrollView>
        <FloatAdd
          icon='ios-paper-plane'
          onPress={this.InputDosen}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  body: {
  }
});
