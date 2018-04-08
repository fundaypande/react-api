import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'native-base';

const FloatAdd = props => (
      <View>
        <TouchableOpacity onPress={props.onPress} style={styles.floating}>
          <Icon name={'ios-add'} style={{ fontSize: 50, color: '#ffffff' }} />
        </TouchableOpacity>
      </View>
);
const styles = {
  floating: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
    textStyle: {
      fontSize: 10,
      color: '#fff',
      textAlign: 'center'
    }
};

export default FloatAdd;
