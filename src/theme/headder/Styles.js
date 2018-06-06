import { StyleSheet, } from 'react-native';

import colors from '../Colors';

 const styles = StyleSheet.create({
     container: {
        height: 80, 
        elevation: 5,
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 15,
        flexDirection: 'row',
        backgroundColor: colors.fosco,     
     },

     containerMenu:{
        padding: 9,
        borderRadius: 10,
        overflow: 'hidden',
     },

     iconMenu: {
         width: 25,
         height: 20,
     },

     containerLogo: {
        flex: 1,
        paddingBottom: 5,
        alignItems: 'center',
     },

     textLogo: {
        fontSize: 30,
        marginLeft: -50,
        color: colors.branco,
        fontFamily: 'DancingScript-Bold',
     }

 });
    
export default styles;