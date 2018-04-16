import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ListView
} from 'react-native';
import { Card, CardItem, Body, Icon } from 'native-base';

import FloatAdd from '../component/FloatingAdd';

type Props = {};
export default class ViewTugas extends Component<Props> {
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
    fetch('http://api.ifreethink.net/fundaypande/getTugas.php')
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
                 name={'ios-document'}
                 style={styles.icon}
               />
               <Text style={styles.font}> {os.matakuliah} </Text>
             </View>
             <View style={styles.card}>
              <Icon
                name={'ios-paper'}
                style={styles.icon}
              />
              <Text style={styles.font}> {os.deskripsi} </Text>
            </View>
            <View style={styles.card}>
             <Icon
               name={'ios-time'}
               style={styles.icon}
             />
             <Text style={styles.font}> {os.deadline} </Text>
           </View>
           <View style={styles.card}>
            <Icon
              name={'ios-calculator'}
              style={styles.icon}
            />
            <Text style={styles.font}> {os.kesulitan} </Text>
          </View>
           </Body>
         </CardItem>
       </Card>
     );
  }


  saveData = () => {
    this.props.navigation.navigate('ListApi');
  };
  goBack = () => {
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
        <FloatAdd icon='ios-add' />
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
    fontSize: 25,
    color: '#333333',
    marginLeft: 10,
    alignSelf: 'center',
    alignItems: 'center'
  },
  font: {
    flex: 5,
    fontSize: 14
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
