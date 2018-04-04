import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Icon } from 'native-base';

const Footer = props => (
      <View style={styles.backFooter}>
        <TouchableOpacity onPress={props.onPress} style={styles.Button}>
          <Icon name={props.icon} style={{ fontSize: 30, color: '#ffffff' }} />
          <Text style={styles.textStyle}>{props.title}</Text>
        </TouchableOpacity>
      </View>
);
const styles = {
    backFooter: {
      backgroundColor: '#3F51B5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 10,
      color: '#fff',
      textAlign: 'center'
    }
};

export default Footer;
