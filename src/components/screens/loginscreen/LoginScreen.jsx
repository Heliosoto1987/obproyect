//vendor
import React from 'react'
//styles
import '../../../styles/screen/loginscreen/loginscreen.css'
//components
import { LoginLeftSide } from './components/LoginLeftSide'
import { LoginRigthSide } from './components/LoginRigthSide'


export const LoginScreen = () => {
    return (
        <div className='loginscreen'>
            <div className='login__left'><LoginLeftSide /></div>
            <div className='login__rigth'><LoginRigthSide /></div>
        </div>
    )
}
