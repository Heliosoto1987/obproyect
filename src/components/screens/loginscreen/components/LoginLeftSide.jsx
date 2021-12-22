//vendor
import React from 'react'
//stlyes
import '../../../../styles/screen/loginscreen/loginleftside.css'


export const LoginLeftSide = () => {
    return (
        <div className='loginleftcomponent'>
          <h2>OpenBootcamp | <span className="loginleftcomponent__title--span">Alumnos</span></h2>
            <form className='loginleftcomponent__form'>
                <label className="loginleftcomponent__form--label" for="email">Email</label>
                <input type="text" placeholder='Introduce tu correo' id="email"/>
                <label className="loginleftcomponent__form--label" for="password">Constraseña</label>
                <input type="text" placeholder='Introduce tu contraseña' id="password" />
                <div>
                <div className="loginleftcomponent__spanbox">
                <span><input type="checkbox" /> Recuerdame</span>
                <span> He olvidado la contraseña</span>
                </div>
                </div>
                <button className='loginleftcomponent__btn'> Iniciar Sesión </button>
            </form>
        </div>
    )
}
