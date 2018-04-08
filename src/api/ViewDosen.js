import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert
} from 'react-native';
import FloatAdd from '../component/FloatingAdd';

type Props = {};

export default class ViewDosen extends Component<Props> {
  constructor(props) {
      super(props);
      this.navigate = this.props.navigation.navigate;
    }

  saveData = () => {
    this.props.navigation.navigate('Logout');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  toAddDosen = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.welcome}>
            Data Dosen
          </Text>
        </ScrollView>
        <FloatAdd onPress={this.saveData} />
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
