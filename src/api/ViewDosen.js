import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

type Props = {};
export default class ViewDosen extends Component<Props> {
  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
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
