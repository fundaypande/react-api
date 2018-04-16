import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import { Icon } from 'native-base';

const IconField = props => (
  <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
    <Icon
      name={props.icon}
      style={{ flex: 1, fontSize: 30, color: '#282C34', marginLeft: 10, alignSelf: 'center', alignItems: 'center' }}
    />
    <TextInput
      style={{ flex: 6, alignSelf: 'center', alignItems: 'center' }}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  </View>
);


export default IconField;
