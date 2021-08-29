import React from 'react';
import './CardDetalle.css';

const CardDetalle = ({ item, DeleteItem, ChangeCantidad }) => {

    //Funcion para ejecutar la funcion del componente padre  (Lista)
    const handleClick = () => {

        DeleteItem( item.producto )
    }

    const handleChange = (e) => {
        if( e.target.value > 0)
        {
            item = { ...item, cantidad: Number( e.target.value )}
            ChangeCantidad( item );
        }
        else
        {
            e.target.value = 1;
        }
        
    }

    return(
        <div className='card-container'>
            <div className = 'info-producto'>
                <p>{ item.producto }</p>
                <p>Precio Unitario: $ { item.precio }</p>
            </div>
            <div className = 'acciones'>
                <p>Cantidad:</p>
                <input type='number' value={ item.cantidad }  onChange = { handleChange } />
                <button onClick = { handleClick }>X</button>
            </div>
        </div>
    )
}

export default CardDetalle;