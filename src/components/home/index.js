import React,{ Component, } from 'react';
import { View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import axios from 'axios';
import {createStore, combineReducers,} from 'redux';

import styles from './Styles';
import Headder from '../../theme/headder';
import Autentic from '../../reducers/Autenticacao';

const reducers = combineReducers({
  Autenticacao: Autentic,
});
const store = createStore(reducers);

console.log('aqui=====',store);

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // axios.get('Http://www.igtest.tk')
    // .then(response => console.log(response))
    // .catch(() => console.log('Errooooo'));
  }

  render() {
    return(
      <View style={styles.container}>
        <Headder/>
        <View style={styles.body} />
      </View>
    );
  }
}

export default Home;