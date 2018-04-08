import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Button, TouchableOpacity, Image, Alert, StatusBar } from 'react-native';

export default class HomeScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
  }

  onPressButton = () => {
    Alert.alert('Kepencet');
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
          <Button
              onPress={() => this.props.navigation.navigate('ListApi')}
              title="API Harga Smartphone"
              color="#01579B"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
AppRegistry.registerComponent('AppForm2', () => HomeScreen);
