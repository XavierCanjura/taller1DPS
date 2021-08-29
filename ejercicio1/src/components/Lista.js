import React from 'react';
import CardDetalle from './CardDetalle';
import './Lista.css'

const Lista = ({ lista, setLista }) => {

    //Funcion para modificar la cantidad del producto
    const ChangeCantidad = ( item ) => {
        lista = lista.map( (list) => {
            if(list.producto === item.producto)
            {  
                list.cantidad = item.cantidad
            }
            return list
        })

        setLista([...lista]);
    }

    //Funcion para eliminar un producto de la lista
    const DeleteItem = ( producto ) => {

        let pos = lista.findIndex( list => list.producto === producto );
        lista.splice(pos, 1);
        setLista([...lista]);
    }

    return(
        <div className='lista-container'>
            {
                lista.map( ( item, index ) => (
                    <CardDetalle 
                        key = { index } 
                        item = { item } 
                        DeleteItem = { DeleteItem } 
                        ChangeCantidad = { ChangeCantidad }  
                    />
                ))
            }
        </div>
    )
}

export default Lista;