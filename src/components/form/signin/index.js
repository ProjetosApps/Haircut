import React, { Component, } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, View, TextInput, Text, ScrollView, ImageBackground, StatusBar, TouchableNativeFeedback,  } from 'react-native';

import styles from './Styles';
import { modifica_dados } from '../../../actions/ActionAutenticacao';

class Signin extends Component {
   constructor(props) {
     super(props);
     
   }

   render() {
  
     return(
      <ScrollView>
      
      </ScrollView>
    );
  }
}

  const mapStateToProps = state => {

    const { email, senha } = state.Autenticacao;
   
    return (
        {
            email, senha,
        }
    );
  }

export default connect(mapStateToProps, {modifica_dados})(Signin);