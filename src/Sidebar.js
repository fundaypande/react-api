import React from 'react';
import { AppRegistry, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';
import * as firebase from 'firebase';

const routes = ['Profile', 'Logout'];

export default class Sidebar extends React.Component {

  logOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={require('./img/bg5.jpg')}
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={require('./img/logo.png')}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
          <TouchableOpacity
            onPress={this.logOut}
            style={{ padding: 10, marginLeft: 10, marginTop: 5 }}
          >
            <Text>Log Out</Text>
          </TouchableOpacity>

        </Content>
      </Container>
    );
  }
}
