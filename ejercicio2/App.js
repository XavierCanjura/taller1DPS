import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import Result from './src/components/Result';

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}


export default function App() {
  const [ state, setState ] = useState({
    cantidad: 0,
    size: { text: '', value: 0 },
    tipoCafe: { text: '', value: 0 },
    tipoPago: '',
    descuento: 0,
    subtotal: 0,
    total: 0,
  });
  const [ errorMenssage, setError ] = useState('');


  const calcularTotal = () => {

    if(!state.size.value > 0)
    {
      setError('Seleccione el tamaño de café');
    }
    else if(!state.tipoCafe.value > 0)
    {
      setError('Seleccione el tipo de café');
    }
    else if(!state.descuento > 0)
    {
      setError('Seleccione el tipo de pago');
    }
    else if(!state.cantidad > 0)
    {
      setError('Ingrese la cantidad de cafe a comprar');
    }
    else
    {
      const { cantidad, size, tipoCafe, descuento } = state;
      let subtotal = cantidad * ( size.value + tipoCafe.value );

      let valor = roundToTwo(subtotal * (1 - descuento));

      setError('');
      setState({ ...state, subtotal, total: valor });
    }
  }

  return (
    <>
      <StatusBar barStyle="ligth-content" />
      <SafeAreaView style={styles.container}>
        <Text style={ styles.header }>StarBosco APP</Text>
        <Form state = { state } setState = { setState } />
      </SafeAreaView>

      <Result state = { state } errorMenssage = { errorMenssage } />
      
      <Footer calcularTotal = { calcularTotal }/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: 275,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  header:{
    marginTop: 25,
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  }
});
