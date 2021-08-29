import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

// onPress={calculate}

const Footer = ({ calcularTotal }) => {
    return(
        <View style = { styles.containerFooter }>
            <TouchableOpacity style = { styles.button } onPress={ calcularTotal }>
                <Text style = { styles.textButton } >Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerFooter: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        alignItems: 'center',
    },
    button:{
        width: '80%',
        backgroundColor: 'green',
        padding: 15,
    },
    textButton:{
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
})

export default Footer;