import { StyleSheet, } from 'react-native';

import colors from '../../theme/Colors';

 const styles = StyleSheet.create({
     container: {
        flex: 1,  
        backgroundColor: colors.fosco,     
     },

     body: {
        flex: 1,  
        flexDirection: 'row',
        backgroundColor: colors.brancoFosco, 
     },

    //  Container Mes ===========================
     containerMes: {
        width: 200,
        backgroundColor: colors.preto,
     },

        // Card Mes style -----------------------
        cardMes: {
            height: 50,
            width: 50,
            elevation: 5,
            borderRadius: 10,
            marginTop: 10,
            alignItems: 'center',
            backgroundColor: colors.branco,
        },

        textNumDia: {
            fontSize: 20,
            color: colors.preto,
        },
        // -------------------------------------
    //  =========================================

     //  Container Agenda ====================
     containerAgenda: {
        flex: 1,
        backgroundColor: "#FFF"
     },
     //  =========================================
 });
    
export default styles;