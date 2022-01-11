//vendor
import React from "react";
//styles
import "../../styles/components/navbar/navbarsearch.css";

export const NavBarSearch = () => {
  return (
    <header className="student-table__header">
      <input
        placeholder="Buscar por Candidatos por Nombre, DNI, etc..."
        className="student-table__header--title"
      ></input>
      <div>
        <span className="student-table__header--circle">NA</span>
        <span className="student-table__header--name">UserName</span>
      </div>
    </header>
  );
};
