//vendor
import React from 'react'
//styles
import '../../../styles/screen/studenttable/studentdata.css'
export const Studentdata = ({nombre,
    ciudad,
    pais,
    telefono,
    correo,
    etiquetas,
    className}) => {
    return (
        <div className={className}>
            <span>{nombre}</span>
            <span>{ciudad}</span>
            <span>{pais}</span>
            <span>{telefono}</span>
            <span>{correo}</span>
            <span className='studentdata__labels'>{etiquetas}</span>
        </div>
    )
}
