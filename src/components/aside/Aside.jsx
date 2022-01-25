//vendor
import React from "react";
//styles
import "../../styles/components/aside.css";

export const Aside = ({ history }) => {
  const handlePush = (value) => {
    history.push(value);
  };

  return (
    <div className="aside">
      <aside className="container-aside">
        <div className="container-aside__title">
          <span className="container-aside__title--open">Open</span>
          <span className="container-aside__title--recruiter">Recruiter</span>
        </div>
        <div
          className="container-aside__letters"
          onClick={() => handlePush("/offers")}
        >
          <span>
            <i className="fas fa-briefcase container-aside__letters--icons"></i>
          </span>
          <button className="container-aside__btn">Ofertas</button>
        </div>
        <div
          className="container-aside__letters"
          onClick={() => handlePush("/table")}
        >
          <span>
            <i className="far fa-user container-aside__letters--icons"></i>
          </span>
          <button className="container-aside__btn">Candidatos</button>
        </div>
        <div
          className="container-aside__letters"
          onClick={() => handlePush("/customers")}
        >
          <span>
            <i className="far fa-building container-aside__letters--icons"></i>
          </span>
          <button className="container-aside__btn">Clientes</button>
        </div>
        <div
          className="container-aside__letters"
          onClick={() => handlePush("/interviews")}
        >
          <span>
            <i className="fas fa-calendar-alt container-aside__letters--icons"></i>
          </span>
          <button className="container-aside__btn">Entrevista</button>
        </div>
      </aside>
    </div>
  );
};
