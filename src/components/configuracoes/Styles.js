import { StyleSheet, } from 'react-native';

import colors from '../../theme/Colors';

 const styles = StyleSheet.create({
     container: {
        flex: 1,  
        backgroundColor: colors.fosco,     
     },

     body: {
        flex: 1,  
        backgroundColor: colors.brancoFosco, 
     },

     //Foto
     containerHeadder: {
        paddingTop: 10,
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

     containerUserFoto: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.ouroEscuro,
    },

     imageUser: {
        width: 149,
        height: 149,
        borderRadius: 300,
     },
 });
    
export default styles;