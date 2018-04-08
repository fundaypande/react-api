import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  StatusBar,
  Text,
  TextInput,
  Image,
  TouchableOpacity
 } from 'react-native';
 import { Button } from 'native-base';

export default class Login extends Component {


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
          <ImageBackground
            source={require('../img/bg2.jpg')}
            style={styles.backgroundImage}
          >
          <View style={styles.viewSpace} />
          <View style={styles.viewHeader}>
            <Image
              source={require('../img/logo.png')}
              style={styles.logo}
            />
            <Text style={styles.headerText}>
              Your Assignment
            </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.viewBody}>
            <Text style={styles.BodyText}>
              Sign Up With Username and Password
            </Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={myButton('rgba(255,255,255,0.5)')}
              placeholder="Username"
            />
            <TextInput
              underlineColorAndroid="transparent"
              style={myButton('rgba(255,255,255,0.5)')}
              placeholder="Password"
              secureTextEntry
            />
            <View style={{ height: 60 }}>
              <Button
                block
                rounded
                style={styles.button}
                onPress={() => this.props.navigation.navigate('ListApi')}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </Button>
            </View>
          </View>
          <View style={styles.viewFooter}>
            <Text style={styles.footerText}>

            </Text>
            <TouchableOpacity>
              <Text style={styles.footerText}>

              </Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
        </View>
    );
  }
}

const myButton = function (bgColor) {
   return {
     width: 300,
     height: 50,
     backgroundColor: bgColor,
     borderRadius: 50,
     paddingLeft: 30,
     marginTop: 10
   };
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    width: 300,
    backgroundColor: 'rgba(109, 58, 174, 0.9)',
    marginTop: 10
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    alignSelf: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 25
  },
  footerText: {
    color: '#ffffff',
    fontSize: 12
  },
  BodyText: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  separator: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    width: 80,
    height: 80,
    alignItems: 'center',
    alignSelf: 'center'
  },
  viewHeader: {
    marginBottom: 50
  },
  viewBody: {
    marginBottom: 50
  },
  viewFooter: {
    flexDirection: 'row'
  },
  viewSpace: {

  },

});
AppRegistry.registerComponent('AppForm2', () => Login);
