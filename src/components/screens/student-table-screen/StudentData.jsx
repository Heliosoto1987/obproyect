//vendor
import React, { useState } from "react";
//styles
import "../../../styles/screen/student-table/student-data.css";
export const StudentData = ({
  history,
  nombre,
  ciudad,
  pais,
  telefono,
  tecnologias,
  estado,
  className,
}) => {
  const buildLabelsList = () => {
    if (estado === "CONTRATADO") {
      return <span className="student-data__state item-green">{estado}</span>;
    } else if (estado === "PREESELECIONADO") {
      return <span className="student-data__state item-purple">{estado}</span>;
    } else if (estado === "PDTN. OFERTAS") {
      return <span className="student-data__state item-blue">{estado}</span>;
    }
  };

  const [arrayTecnologies] = useState(tecnologias);
  return (
    <div className={className} onClick={() => history.push("/skill-tokens")}>
      <span>{nombre}</span>
      <div>
        <span>{ciudad}</span> <span>{pais}</span>
      </div>
      <span>{telefono}</span>
      <div className="student-data__tecnologies">
        <span className="student-data__tecnologies--items">
          {arrayTecnologies[0]}
        </span>
        <span className="student-data__tecnologies--items">
          {arrayTecnologies[1]}
        </span>
        <span className="student-data__tecnologies--items">
          {arrayTecnologies[2]}
        </span>
      </div>
      <span>{buildLabelsList()}</span>
    </div>
  );
};
