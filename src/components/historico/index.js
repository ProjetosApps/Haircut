import React,{ Component, } from 'react';
import { View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
// import axios from 'axios';
import { connect } from 'react-redux';


import styles from './Styles';
import Headder from '../../theme/headder';

class Historico extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Headder/>
        <View style={styles.body} />
      </View>
    );
  }
}

const mapStateToProp = state => (
  {
      email: state.Autenticacao.email,
      senha: state.Autenticacao.senha
  }
)

export default connect(mapStateToProp, null)(Historico);