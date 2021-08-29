import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Result = ( { state, errorMenssage } ) => {
    return(
        <View style = { styles.containerResult }>
            <Text>RESUMEN</Text>
            <DataResul text = { `Cantidad solicitada:`} value = { state.cantidad }/>
            <DataResul text = { `Tamaño:`} value = { `${state.size.text} $ ${state.size.value.toFixed(2)}`  }/>
            <DataResul text = { `Tipo Café:`} value = { `${state.tipoCafe.text} $ ${state.tipoCafe.value.toFixed(2)}` }/>
            <DataResul text = { `Tipo de Pago:`} value = { state.tipoPago }/>
            <DataResul text = { `Descuento %:`} value = { `${ state.descuento * 100 } %` }/>
            <DataResul text = { `Subtotal:`} value = { `$ ${ state.subtotal.toFixed(2) }` }/>
            <DataResul text = { `Total a Pagar:`} value = { `$ ${ state.total.toFixed(2) }` }/>
            <Text style = { styles.error }>{ errorMenssage }</Text>
        </View>
    )
}

const DataResul = ({ text, value}) => {
    return(
        <View style = { styles.info }>
            <Text>{ text }</Text>
            <Text>{ value }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerResult: {
        marginHorizontal: 40,
        padding: 20,
        alignItems: 'center',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        fontSize: 18,
    },
    error:{
        fontSize: 18,
        textAlign: 'center',
        color: '#f00',
        marginTop: 10,
    },
})

export default Result;