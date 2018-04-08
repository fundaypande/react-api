import { TabNavigator } from 'react-navigation';
import ViewMatkul from './api/ViewMatkul';
import ViewDosen from './api/ViewDosen';
import ViewTugas from './api/ViewTugas';

const MyTab = TabNavigator({
    Tugas: { screen: ViewTugas },
    MataKuliah: { screen: ViewMatkul },
    Dosen: { screen: ViewDosen },
  },
  {
    tabBarOptions: {
      style: {
            backgroundColor: 'transparent',
            padding: 0,
      },
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgba(255,255,255,0.7)',
      indicatorStyle: {
            borderBottomColor: '#6D3AAE',
            borderBottomWidth: 3,
            elevation: 6
        },
        tabStyle: {
            borderRightColor: 'transparent',
            borderRightWidth: 1,
      }
    },
  }

);

export default MyTab;
