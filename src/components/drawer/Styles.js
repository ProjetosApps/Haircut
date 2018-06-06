import { StyleSheet, Dimensions, } from 'react-native';

import colors from '../../theme/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

 const styles = StyleSheet.create({
     container: {
        flex: 1,       
     },

     containerImage: {
        flex: 1,
     },

     containerBlack: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.brancoFosco,
     },

     containerHeadder: {
        paddingTop: 40,
        paddingBottom: 20,
        alignItems: 'center',
     },

     containerFoto: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.ouroEscuro,
        backgroundColor: colors.fosco,
     },

     iconCamera: {
        width: 50,
        height: 50,
     },

     containerBody: {
        flex: 1, 
        backgroundColor: colors.fosco,
     },

     containerBtn: {
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
     },

     iconBtn: {
        width: 20,
        height: 20,
     },

     textBtn: {
        marginLeft: 15,
        fontSize: 16,
        color: colors.branco,
     },

     separador: {
        height: .3,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.ouro,
     },

     containerBtnSair: {
        height: 50,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.ouroEscuro,
     }

 })


 export default styles;