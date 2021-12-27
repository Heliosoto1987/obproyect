//vendor
import React from 'react'
//styles
import '../../../styles/screen/studenttable/studenttable.css'
import { Studentdata } from './Studentdata'

import { StudentFIlter } from './StudentFIlter'

const data = [
    {
    id: '1',
    nombre: 'Helio Javier Soto',
    ciudad: 'Madrid',
    pais: 'España',
    telefono: '654190536',
    correo: 'heliosoto17@gmail.com',
    etiquetas: 'html',
    },
    {
    id: '2',
    nombre: 'Helio Javier Soto',
    ciudad: 'Madrid',
    pais: 'España',
    telefono: '654190536',
    correo: 'heliosoto17@hotmail.com',
    etiquetas: 'html css javascript',
    }
]

export const StudentTable = () => {
    return (
        <div className='studenttable'>
            <header className='studenttable__header'>
                <h2 className='loginleftcomponent__title studenttable__header--title'>OpenBootcamp 
                    <span className="loginleftcomponent__title--span"> | Alumnos
                    </span>
                </h2>
                <div>
                    <span className='studenttable__header--name'>UserName</span>
                </div>
            </header>
            <div className='studenttable__main'>
                <div className='studenttable__mainstudents'>
                    <header className='studenttable__main--header'>
                        <div className='studenttable__mainheader--firstbox'>
                        <label className=''>Alumnos</label>
                        <input type="text" placeholder="&#xf3eb; hola"></input>
                        </div>
                        <button className='studenttable__main--button'>+ Añadir alumnos</button>
                    </header>
                    <div className='studenttable__mainsortfield'>
                        <span>NOMBRE <img src='src/icon(1).png' alt="lupa"></img></span>
                        <span>CIUDAD</span>
                        <span>PAIS</span>
                        <span>TELEFONO</span>
                        <span>CORREO ELECTRONICO</span>
                        <span>ETIQUETAS</span>
                        </div>
                        {
                            data.map((value) => (
                                <Studentdata
                                key={value.id}
                                className={'studenttable__mainsortfield border'}
                                nombre={value.nombre}
                                ciudad={value.ciudad}
                                pais={value.pais}
                                telefono={value.telefono}
                                correo={value.correo}
                                etiquetas={value.etiquetas}
                                
                                
                                />
                        ))
                        }
                </div>
                <div className='studenttable__mainfilter'><StudentFIlter /></div>
            </div>
        </div>
    )
}
