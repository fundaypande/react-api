import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'native-base';

import MyTab from '../TabManager';

const HeaderKu = props => (

  <View style={styles.header}>
      <ImageBackground
        source={require('../img/bg5.jpg')}
        style={styles.headerImage}
      >
      <View style={styles.viewSpace} />
      <View style={styles.viewHeader}>
      <View style={styles.contHeader}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <TouchableOpacity onPress={props.onPressLeft} style={styles.touch}>
            <Icon name={props.iconLeft} style={{ fontSize: 30, color: '#ffffff', marginLeft: 5 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }}>
          <Text style={styles.textHeader}>{props.title}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={props.onPressRight} style={styles.touch}>
            <Icon name={props.iconRight} style={{ fontSize: 30, color: '#ffffff', marginLeft: 10 }} />
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style={{ height: 20 }} />
      <MyTab />
      </ImageBackground>
      </View>
);

const styles = {
  contHeader: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingLeft: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
    elevation: 7
  },
  headerImage: {
    flex: 1,
    alignSelf: 'stretch',
  },
  viewSpace: {
    height: 10
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 10,
    justifyContent: 'flex-start',
  }
};

export default HeaderKu;
