import React,{ Component, } from 'react';
import { View, FlatList, Text, } from 'react-native';
// import axios from 'axios';
import { Actions, } from 'react-native-router-flux';

import styles from './Styles';
import Headder from '../../theme/headder';

const vetorMes = [
    {
        dia: '11',
    },
    {
        dia: '2',
    },
    {
        dia: '3',
    },
    {
        dia: '1',
    },
    {
        dia: '2',
    },
    {
        dia: '3',
    },
    {
        dia: '1',
    },
    {
        dia: '2',
    },
    {
        dia: '3',
    },
    {
        dia: '1',
    },
    {
        dia: '2',
    },
    {
        dia: '3',
    },
    {
        dia: '1',
    },
    {
        dia: '2',
    },
    {
        dia: '3',
    },
]

class Mes extends Component {
  _renderItem(item) {
      return(
        <View style={styles.cardMes}>
          <Text style={styles.textNumDia}>{item.dia}</Text>
        </View>
      );
    }

  render() {
    return(
        <View style={{marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight:10,}}>
        <FlatList data={vetorMes}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => this._renderItem(item)}
                  vertical
                  initialNumToRender={2}/>
        </View>         
    );
  }
}

class Agendar extends Component {
    constructor(props) {
        super(props);

        this.state = { contato: [], };
      }
   
     componentDidMount() {
    //    axios.get('http://www.igtest.tk')
    //    .then(response => this.setState({contato: response.data}))
    //    .catch(() => console.log('Errooooo'));
     }
   
      render() {
        
        console.log('Aquiiiii1111');
        console.log('Aquiiiii', this.state.contato);
  
    console.disableYellowBox = true;
    return(
      <View style={styles.container}>

      <Headder />

        {/* =================================================================== */}
        <View style={styles.body}>
        
          {/* Container Mes =================================================== */}
          <View style={styles.containerMes}>
            <Mes />
          </View>
          {/* ================================================================= */}
        
          {/* Container Agenda ================================================ */}
          <View style={styles.containerAgenda}>
          </View>
          {/* ================================================================= */}

        </View>
        {/* =================================================================== */}
      </View>
    );
  }
}

export default Agendar;