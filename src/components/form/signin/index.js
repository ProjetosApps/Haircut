import React, { Component, } from 'react';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Image, View, TextInput, Text, ScrollView, Switch, ImageBackground, StatusBar, TouchableNativeFeedback,  } from 'react-native';

import { CheckBox, DatePicker } from 'native-base';
import styles from './Styles';
import colors from '../../../theme/Colors';
import { modifica_dados } from '../../../actions/ActionAutenticacao';

class Signin extends Component {
   constructor(props) {
     super(props);

    this.state = { checked: false, };
     
   }

  componentDidMount() {
  
  }

  _signin() {
    if(this.props.email != '' && this.props.senha != ''){

    }
      
  }

   render() {
  
     return(
       
      <ScrollView showsVerticalScrollIndicator={false} >
       <ImageBackground blurRadius={4} source={ require('../../../assets/imgs/salao.jpg')} style={styles.containerImage}>
        <StatusBar backgroundColor={"transparent"} translucent/>
      {/* ========================================================== */}
        <View style={styles.containerLogo}>

          <TouchableNativeFeedback onPress={() => Actions.pop()} useForeground>
            <View style={styles.containerImageLogo}>
              <ImageBackground source={require('../../../assets/icons/left_arrow.png')} style={styles.logo}/>
            </View>
          </TouchableNativeFeedback>

          <View style={styles.containerText}>
            <Text style={styles.textLogo}>Cadastre-se</Text>
          </View>

        </View>
      {/* ========================================================== */}
        

         <ScrollView showsVerticalScrollIndicator={false} >
         <View style={styles.container}>
         {/* ===================================== */}
         <View style={styles.containerHeadder}>
            <View style={styles.containerFoto}>
              <View>
                <Image source={require('../../../assets/icons/camera.png')} style={styles.iconCamera} />
                <Image source={require('../../../assets/icons/plus.png')} style={{height: 11, width: 11, position: 'absolute', right: 0, bottom: 4,  }} />
              </View>
            </View>
          </View>
          {/* ===================================== */}

          {/* ---------------------------------------------------------- */}
           <View style={styles.containerForm}>

             <View style={styles.item}>
               <Image source={require('../../../assets/icons/avatar.png')} style={styles.icon}/>
               <TextInput placeholder={'Nome'}
                          placeholderTextColor={colors.place}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
            
             <View style={styles.item}>
               <Image source={require('../../../assets/icons/email.png')} style={[styles.icon, {marginTop: 6}]}/>
               <TextInput placeholder={'E-mail'}
                          placeholderTextColor={colors.place}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
            
             <View style={styles.item}>
               <Image source={require('../../../assets/icons/whats.png')} style={[styles.icon, {marginTop: 3}]}/>
               <TextInput placeholder={'Celular'}
                          placeholderTextColor={colors.place}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
            
             <View style={styles.item}>
               <Image source={require('../../../assets/icons/locked.png')} style={[styles.icon, {marginTop: 2}]}/>
               <TextInput placeholder={'Senha'}
                          placeholderTextColor={colors.place}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
            
             <View style={styles.item}>
               <Image source={require('../../../assets/icons/locked.png')} style={[styles.icon, {marginTop: 2}]}/>
               <TextInput placeholder={'Senha'}
                          placeholderTextColor={colors.place}
                          underlineColorAndroid={'transparent'}
                          style={styles.textInput} />
             </View>
             
             <View style={[styles.item,{ borderBottomWidth: 0}]}>
               <Image source={require('../../../assets/icons/calendar.png')} style={[styles.icon, {marginTop: -6}]}/>
               <DatePicker locale={"pt"}
                           timeZoneOffsetInMinutes={undefined}
                           modalTransparent={false}
                           animationType={"fade"}
                           androidMode={"default"}
                           placeHolderText="Data de nascimento"
                           textStyle={{ color: "#000", fontSize:14, marginLeft: 5,}}
                           placeHolderTextStyle={{color: colors.place, fontSize:14, marginLeft: 5,  }}
                           onDateChange={(data) => console.log(data)}
                          />
             </View>
             
                
           </View>
          {/* ---------------------------------------------------------- */}

         

          {/* ========================================================== */}
           <View style={styles.containerCreate}>
             
             {/* <View style={styles.separator}>
               <Switch thumbTintColor={colors.ouro} onTintColor={colors.placeFosco} value={this.state.checked} onValueChange={() => this.setState({checked: !this.state.checked })}/>
               <Text style={styles.textSeparator} onPress={() => this.setState({checked: !this.state.checked })}>Aceito termos de uso</Text>
             </View> */}
           
             <View style={styles.containerButtons}>
               
               <TouchableNativeFeedback onPressOut={() => Actions.pop()} 
                                         useForeground>
                 <View style={[styles.btnStyle, styles.btnEntarFacebook]}>
                   <Image source={ require('../../../assets/icons/cancel_btn.png') } style={styles.logoFace}/>
                   <Text style={styles.textBtn}>Cancelar</Text>
                 </View>
               </TouchableNativeFeedback>
               
               <TouchableNativeFeedback onPressOut={() => this._signin()}
                                         useForeground>
                 <View style={[styles.btnStyle, styles.btnCreate]}>
                   <Image source={ require('../../../assets/icons/save.png') } style={styles.logoFace}/>
                   <Text style={styles.textBtn}>Salvar</Text>
                 </View>
               </TouchableNativeFeedback>
             
             </View>

           </View>
          {/* ========================================================== */}

         </View>
        </ScrollView>

       </ImageBackground>
        </ScrollView>
      
    );
  }
}

const mapStateToProps = state => {
    const { email, senha } = state.Autenticacao;
    return ({ email, senha, });
  }

export default connect(mapStateToProps, {modifica_dados})(Signin);