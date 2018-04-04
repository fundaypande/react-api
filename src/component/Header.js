import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const Header = props => (
      <View style={styles.contHeader}>
        <TouchableOpacity onPress={props.onPress} style={styles.touch}>
          <Icon name={props.icon} style={{ fontSize: 30, color: '#ffffff', marginLeft: 5 }} />
          <Text style={styles.textHeader}>{props.title}</Text>
        </TouchableOpacity>
      </View>
);

const styles = {
  contHeader: {

    backgroundColor: '#3F51B5',
    justifyContent: 'flex-start',
    padding: 10,
    height: 50
  },
  touch: {
    flexDirection: 'row',
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 20
  }
};

export default Header;
