import React,{ Component, } from 'react';
import { Actions, } from 'react-native-router-flux';
import { View, Text, Image, StatusBar, TouchableNativeFeedback, } from 'react-native';

import styles from './Styles';


class Headder extends Component {
  render() {
    return(
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />

        {/* Botão Menu ================================================================== */}
        <TouchableNativeFeedback onPressOut={() => Actions.drawerOpen() } useForeground >
          <View style={styles.containerMenu}>
            <Image source={require('../../assets/icons/menu.png')} style={styles.iconMenu}/>
          </View>
        </TouchableNativeFeedback>
        {/* ============================================================================= */}

        {/* Container Logo ==============================================================*/}
        <View style={styles.containerLogo}>
          <Text style={styles.textLogo}>HairCut</Text>
        </View>
        {/* ============================================================================= */}
      
      </View>
    );
  }
}

export default Headder;