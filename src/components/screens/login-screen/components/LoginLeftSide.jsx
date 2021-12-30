//vendor
import React from "react";
//react-router
import { useNavigate } from "react-router-dom";
//stlyes
import "../../../../styles/screen/login-screen/loginleftside.css";

export const LoginLeftSide = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/table", {
      replace: true,
    });
  };
  return (
    <div className="loginleftcomponent">
      <h2 className="loginleftcomponent__title">
        OpenBootcamp{" "}
        <span className="loginleftcomponent__title--span"> | Alumnos</span>
      </h2>
      <form className="loginleftcomponent__form">
        <div className="loginleftcomponentform__box">
          <label className="loginleftcomponent__form--label">Email</label>
          <input
            className="loginleftcomponentform__box--input"
            type="text"
            placeholder=" Introduce tu correo"
            id="email"
          />
        </div>
        <div className="loginleftcomponentform__box">
          <label className="loginleftcomponentform__box--label">
            Constraseña
          </label>
          <input
            className="loginleftcomponentform__box--input"
            type="text"
            placeholder=" Introduce tu contraseña"
            id="password"
          />
        </div>
        <div>
          <div className="loginleftcomponent__spanbox">
            <span>
              <input type="checkbox" /> Recuerdame
            </span>
            <span> He olvidado la contraseña</span>
          </div>
        </div>
        <button className="loginleftcomponent__btn" onClick={handleLogin}>
          {" "}
          Iniciar Sesión{" "}
        </button>
      </form>
      <footer className="loginleftcomponent__footer">
        <div>Copyright © 2021 Open Bootcamp SL, Imagina Group</div>
        <div>Todos los derechos reservados.</div>
        <div>Política de Privacidad</div>
      </footer>
    </div>
  );
};
