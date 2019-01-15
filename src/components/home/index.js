import React,{ Component, } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { modifica_dados } from '../../actions/ActionAutenticacao';

import styles from './Styles';
import Headder from '../../theme/headder';

import Autentic from '../../reducers/Autenticacao';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { colapse: null };
  }


  render() {
    return(
      <View style={styles.container}>
        <Headder/>
        <View style={styles.body}>
        
        {/* <CollapseView colapse={this.state.colapse} renderView={() => <View style={{height: 40, width: '100%', backgroundColor: 'red'}}/>}
                      renderCollapseView={() => <View style={{height: 80, width: '100%', alignItems:'center', justifyContent: 'center', backgroundColor: 'blue'}}>
                       
                       
                       <TouchableNativeFeedback onPress={() => this.setState({colapse: false})}>
                       <View style={{height: 30, width: 30, borderRadius: 15, backgroundColor: 'yellow'}}/>
                       </TouchableNativeFeedback>
                      </View>
                      }
                    /> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {

  const { email, senha , colapse, change} = state.Autenticacao;

  return ({ email, senha, colapse, change });
}

export default connect(mapStateToProps, {modifica_dados})(Home);