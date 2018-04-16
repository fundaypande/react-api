import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';
import { Card, CardItem, Body, Icon } from 'native-base';
import FloatAdd from '../component/FloatingAdd';

type Props = {};

export default class ViewDosen extends Component<Props> {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  componentDidMount() {
    this.getType()
  }

  getType() {
    fetch('http://api.ifreethink.net/fundaypande/getDosen.php')
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response)
        });
    });
  }

  renderRow(os) {
     return (
       <Card>
         <CardItem>
           <Body>
              <View style={styles.card}>
               <Icon
                 name={'ios-person'}
                 style={styles.icon}
               />
               <Text style={{ flex: 5 }}> {os.nama} </Text>
             </View>
           </Body>
         </CardItem>
       </Card>
     );
  }

  saveData = () => {
    this.props.navigation.navigate('Logout');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  toAddDosen = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
        </ScrollView>
        <FloatAdd icon='ios-add' onPress={this.saveData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1, flexDirection: 'row', alignSelf: 'center', alignItems: 'center'
  },
  icon: {
    flex: 1,
    fontSize: 30,
    color: '#34322F',
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
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
