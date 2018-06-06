import React, { Component, } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, View, TextInput, Text, ScrollView, ImageBackground, StatusBar, TouchableNativeFeedback,  } from 'react-native';

import styles from './Styles';
import { modifica_dados } from '../../../actions/ActionAutenticacao';

class Login extends Component {
   constructor(props) {
     super(props);
     console.log('prrrropprorp', props);
     
   }

  componentDidMount() {
    axios.get('http://www.igtest.tk')
    .then(response => this.setState({contato: response.data}))
    .catch(() => console.log('Errooooo'));
  }

   render() {
  
     return(
      <ScrollView>

       <ImageBackground blurRadius={4} source={ require('../../../assets/imgs/salao.jpg')} style={styles.containerImage}>
        
         <View style={styles.container}>

           <StatusBar backgroundColor={"transparent"} translucent/>

          {/* ========================================================== */}
           <View style={styles.containerLogo}>

             <View style={styles.containerImageLogo}>
               <ImageBackground source={require('../../../assets/imgs/logo.png')} style={styles.logo}/>
             </View>

             <View style={styles.containerText}>
               <Text style={styles.textLogo}>HairCut</Text>
               <Text style={styles.textSubTitle}>Sua agenda de horários.</Text>
             </View>

           </View>
          {/* ========================================================== */}

          {/* ---------------------------------------------------------- */}
           <View style={styles.containerForm}>

             <View style={styles.item}>
               <Image source={require('../../../assets/icons/avatar.png')} style={styles.icon}/>
               <TextInput placeholder={'Usuário'}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
             
             <View style={styles.itemPassword}>
               <Image source={require('../../../assets/icons/locked.png')} style={styles.iconLock}/>
               <TextInput placeholder={'Senha'}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
                
           </View>
          {/* ---------------------------------------------------------- */}

          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
           <View style={styles.containerLogin}>
          
             <TouchableNativeFeedback onPressOut={() =>this.props.modifica_dados()} 
                                      background={TouchableNativeFeedback.SelectableBackground()}
                                      useForeground>
               <View style={[styles.btnStyle, styles.btnEntar]}>
                 <Text style={styles.textBtn}>Entrar</Text>
               </View>
             </TouchableNativeFeedback>

             <Text onPress={() => alert('Esqueceu')} style={styles.textRecovery}>Esqueceu a senha?</Text>
           </View> 
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          {/* ========================================================== */}
           <View style={styles.containerCreate}>
             
             <View style={styles.separator}>
               <View style={styles.line}/>
               <Text style={styles.textSeparator}>Ou</Text>
               <View style={styles.line}/>
             </View>
           
             <View style={styles.containerButtons}>
               
               <TouchableNativeFeedback onPressOut={() => false} 
                                         background={TouchableNativeFeedback.SelectableBackground()}
                                         useForeground>
                 <View style={[styles.btnStyle, styles.btnEntarFacebook]}>
                   <Image source={ require('../../../assets/icons/face-logo.png') } style={styles.logoFace}/>
                   <Text style={styles.textBtn}>Facebook</Text>
                 </View>
               </TouchableNativeFeedback>
               
               <TouchableNativeFeedback onPressOut={() => false} 
                                         background={TouchableNativeFeedback.SelectableBackground()}
                                         useForeground>
                 <View style={[styles.btnStyle, styles.btnCreate]}>
                   <Image source={ require('../../../assets/icons/signin.png') } style={styles.logoFace}/>
                   <Text style={styles.textBtn}>Sign Up</Text>
                 </View>
               </TouchableNativeFeedback>
             
             </View>

           </View>
          {/* ========================================================== */}

         </View>

       </ImageBackground>
      
      </ScrollView>
    );
  }
}

  const mapStateToProps = state => {
    console.log('modificando dados', modifica_dados);
    return (
        {
            email: state.Autenticacao.email,
            senha: state.Autenticacao.senha
        }
    );
  }

export default connect(mapStateToProps, {modifica_dados})(Login);