import React,{ Component, } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, ImageBackground, Image, Text, TouchableNativeFeedback } from 'react-native';

import styles from './Styles';
import colors from '../../theme/Colors';

class Drawer extends Component {
  render() {
    return(
      <View style={styles.container}>
  
        <ImageBackground source={ require('../../assets/imgs/homem.jpg')} style={styles.containerImage} blurRadius={.7} >
          <View style={styles.containerBlack}>

          {/* ===================================== */}
            <View style={styles.containerHeadder}>
              <View style={styles.containerFoto}>
                <Image source={require('../../assets/icons/camera.png')} style={styles.iconCamera} />
              </View>
            </View>
          {/* ===================================== */}

          <View style={styles.containerBody}> 

           {/* Botão Home ========================================================== */}
            <TouchableNativeFeedback onPressOut={ () => Actions.Home()} background={TouchableNativeFeedback.SelectableBackground()} > 
              <View style={styles.containerBtn}>
                <Image source={ require('../../assets/icons/home.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Home</Text>
              </View> 
            </TouchableNativeFeedback>
            {/* ==================================================================== */}

            <View style={styles.separador}/>
            
            {/* Botão Agendar ====================================================== */}
            <TouchableNativeFeedback onPressOut={ () => Actions.Agendar()} background={TouchableNativeFeedback.SelectableBackground()} > 
              <View style={styles.containerBtn}>
                <Image source={ require('../../assets/icons/agenda.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Agendar Horário</Text>
              </View> 
            </TouchableNativeFeedback>
            {/* ==================================================================== */}

            <View style={styles.separador}/>

            {/* Botão Histórico ==================================================== */}
            <TouchableNativeFeedback onPressOut={ () => Actions.Historico()} background={TouchableNativeFeedback.SelectableBackground()} > 
              <View style={styles.containerBtn}>
                <Image source={ require('../../assets/icons/history.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Meu Histórico</Text>
              </View> 
            </TouchableNativeFeedback>
            {/* ==================================================================== */}

            <View style={styles.separador}/>
            {/* Botão Informações ====================================================== */}
            <TouchableNativeFeedback onPressOut={ () => false} background={TouchableNativeFeedback.SelectableBackground()} > 
              <View style={styles.containerBtn}>
                <Image source={ require('../../assets/icons/pin-ouro.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Informações da Empresa</Text>
              </View> 
            </TouchableNativeFeedback>
            {/* ==================================================================== */}

            <View style={styles.separador}/>

            {/* Botão Configurações ================================================ */}
            <TouchableNativeFeedback onPressOut={ () => false} background={TouchableNativeFeedback.SelectableBackground(colors.branco)} > 
              <View style={styles.containerBtn}>
                <Image source={ require('../../assets/icons/gear.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Configurações</Text>
              </View>
            </TouchableNativeFeedback> 
            {/* ==================================================================== */}
         
          </View> 


          {/* Botão Sair =========================================================== */}
          <TouchableNativeFeedback onPressOut={ () => false} background={TouchableNativeFeedback.SelectableBackground()} > 
            <View style={styles.containerBtnSair}>
                <Image source={ require('../../assets/icons/logout.png')} style={styles.iconBtn}/>
                <Text style={styles.textBtn}>Sair</Text>
            </View> 
          </TouchableNativeFeedback>
          {/* ====================================================================== */}

          </View>
        </ImageBackground>  
  
      </View>
    );
  }
}

export default Drawer;