import { StyleSheet, Dimensions, } from 'react-native';

import colors from '../../../theme/Colors';

 width = Dimensions.get('window').width;
 height = Dimensions.get('window').height;
 center = {alignItems: 'center', justifyContent: 'center',};

const styles = StyleSheet.create({
    containerImage: {
        height,
        paddingTop: 25,
    },

    container: {
        flex: 1,
        // paddingTop: 5,
        paddingBottom: 25,
        marginBottom: 25,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'column',
        // backgroundColor: 'rgba(40, 40, 40, .2)',
        backgroundColor: 'rgba(253, 253, 253, .1)',
    },

    containerLogo: {
        paddingRight: 28,
        paddingBottom: 10,
        marginHorizontal: 15,
        alignItems: 'center',       
        flexDirection: 'row',
    },

    containerImageLogo: {
        width: 30,
        height: 30,
        marginBottom: 0,
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 18,
        height: 14,
    },

    containerText: {
        flex: 1,
        alignItems: 'center'
    },

    textLogo: {
        fontSize: 27,
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
        // paddingBottom: 10,
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
        color: colors.preto,
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
        ...center,
        height: 45,
        elevation: 5,
        borderRadius: 200,
        overflow: 'hidden',
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
        ...center,
        marginTop: 25,
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
        // fontSize: 16,
        color: colors.branco,
        paddingHorizontal: 10,
        // fontFamily: 'DancingScript-Bold'
    },

    containerButtons: {
        flex: 1,
        paddingTop: 35,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },

    btnEntarFacebook: {
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: colors.ouroEscuro,
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
        backgroundColor: colors.ouro,
    },

    //Foto
    containerHeadder: {
        paddingTop: 10,
        // paddingBottom: 10,
        alignItems: 'center',
     },

     containerFoto: {
        width: 130,
        height: 130,
        borderWidth: 2,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.ouroEscuro,
        backgroundColor: 'rgba(2, 2, 2, .2)',
     },

     iconCamera: {
        width: 40,
        height: 40,
     },
});

export default styles;
