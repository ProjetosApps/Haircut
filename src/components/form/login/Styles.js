import { StyleSheet, Dimensions, } from 'react-native';

import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 15,
        height: Dimensions.get('window').height,
    },

    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 30,
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: 'rgba(253, 253, 253, .1)',
    },

    containerLogo: {
        alignItems: 'center',       
    },

    containerImageLogo: {
        marginBottom: 0,
    },

    logo: {
        width: 80,
        height: 80,
    },

    containerText: {
        alignItems: 'center'
    },

    textLogo: {
        fontSize: 37,
        color: colors.branco,
        fontFamily: 'DancingScript-Bold',
    },

    textSubTitle: {
        fontSize: 16,
        color: colors.branco,
    },

    containerForm: {
        marginTop: 10,
        borderRadius: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'rgba(253, 253, 253, .9)',
    },

    item: {
        height: 50,
        paddingHorizontal: 10,
        borderBottomWidth: .4,
        borderBottomColor: '#cdcdcd',
        alignItems: 'center',
        flexDirection: 'row',
    },

    icon: {
        width: 20,
        height: 20,
    },

    textInput: {
        flex: 1,
        height: 55,
        marginLeft: 10,
        paddingTop: 20,
    },

    iconLock: {
        width: 25,
        height: 25,
        marginLeft: -4,
    },

    itemPassword: {
        height: 40,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },

    containerLogin: {
        height: 90,
    
    },

    btnStyle: {
        flex: 1,
        height: 45,
        elevation: 5,
        borderRadius: 200,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBtn: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.branco,
    },
    
    btnEntar: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        backgroundColor: colors.ouro,
    },

    textRecovery: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: '200',
        textAlign: 'center',
        color: colors.branco,
    },

    containerCreate: {
        flex: 1,
    },

    separator: {
        marginTop: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },

    line: {
        flex: 1,
        height: .4,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: colors.branco,

    },

    textSeparator: {
        fontSize: 22,
        color: colors.branco,
        fontFamily: 'DancingScript-Bold'
    },

    containerButtons: {
        flex: 1,
        paddingTop: 23,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },

    btnEntarFacebook: {
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: colors.azulFace,
    },

    logoFace: {
        width: 20,
        height: 20,
        marginLeft: -5,
        marginRight: 10,
    },

    btnCreate: {
        marginLeft: 10,
        flexDirection: 'row',
        backgroundColor: colors.ouroEscuro
    },
});

export default styles;
