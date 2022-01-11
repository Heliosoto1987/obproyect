//vendor
import React from "react";
//styles
import "../../styles/components/aside.css";
//custom hooks
import { usePush } from "../../hooks/usePush";

export const Aside = () => {
  const [handlePush] = usePush();

  return (
    <aside className="container-aside">
      <div className="container-aside__title">
        <span className="container-aside__title--open">Open</span>
        <span className="container-aside__title--recruiter">Recruiter</span>
      </div>
      <div className="container-aside__letters">
        <span>
          <i className="fas fa-briefcase container-aside__letters--icons"></i>
        </span>
        <button className="container-aside__btn">Ofertas</button>
      </div>
      <div
        onClick={() => handlePush("table")}
        className="container-aside__letters"
      >
        <span>
          <i className="far fa-user container-aside__letters--icons"></i>
        </span>
        <button className="container-aside__btn">Candidatos</button>
      </div>
      <div
        onClick={() => handlePush("customers")}
        className="container-aside__letters"
      >
        <span>
          <i className="far fa-building container-aside__letters--icons"></i>
        </span>
        <button className="container-aside__btn">Clientes</button>
      </div>
      <div className="container-aside__letters">
        <span>
          <i className="fas fa-calendar-alt container-aside__letters--icons"></i>
        </span>
        <button className="container-aside__btn">Entrevista</button>
      </div>
    </aside>
  );
};
