import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';

const Button = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.Button}>
    <Icon name={props.name} style={{ fontSize: 25, color: props.color }} />
  </TouchableOpacity>
);

export default Button;
