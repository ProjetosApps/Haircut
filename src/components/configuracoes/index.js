import React,{ Component, } from 'react';
import { View, Image, Dimensions, TouchableNativeFeedback} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { modifica_dados } from '../../actions/ActionAutenticacao';
// import axios from 'axios';

// import Accordion from "react-native-accordion";

// import CollapseView from 'react-native-collapse-view';
import styles from './Styles';
import Headder from '../../theme/headder';
import Autentic from '../../reducers/Autenticacao';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { colapse: null };
  }

  componentDidMount() {

    
  }

  render() {
    console.log(this.props.colapse)
    return(
      <View style={styles.container}>
        <Headder/>
        <View style={styles.body} >

          {/* ===================================== */}
          <View style={styles.containerHeadder}>
            {/* <View style={styles.containerFoto}>
              <Image source={require('../../assets/icons/camera.png')} style={styles.iconCamera} />
            </View> */}
            <View style={styles.containerUserFoto}>
              <Image source={require('../../assets/imgs/user_man.jpg')} style={styles.imageUser} />
            </View>
          </View>
        {/* ===================================== */}

        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.Autenticacao);
  const { email, senha , colapse, change} = state.Autenticacao;

  return ({ email, senha, colapse, change });
}

export default connect(mapStateToProps, {modifica_dados})(Home);