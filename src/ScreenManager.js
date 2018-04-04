import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ListApi from './api/ListApi';
import AddData from './api/AddData';

const Screens = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  ListApi: {
    screen: ListApi
  },
  AddData: {
    screen: AddData
  },
}
);

export default Screens;
