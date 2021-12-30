//vendor
import React from "react";
//styles
import "../../../styles/screen/student-table/student-filter.css";

export const StudentFilter = ({ inputChangeLabels }) => {
  return (
    <div className="student-filter">
      <div className="student-filter__title">
        Filtros de búsquedas<i className="far fa-trash-alt"></i>{" "}
      </div>
      <form className="student-filter__form">
        <label className="student-filter__labels">Etiquetas</label>
        <input
          className="student-filter__input"
          type="text"
          placeholder="Escribe para buscar...."
          name="inputChangeLabels"
          value={inputChangeLabels}
        />
        <div className="studentfiltelabels"></div>
        <label className="student-filter__checkbox__label">Pais</label>
        <select className="student-filter__select">
          <option>1</option>
        </select>
        <label className="student-filter__checkbox__label">Ciudad</label>
        <select className="student-filter__select">
          <option>2</option>
        </select>
        <div className="student-filter__checkbox">
          <label className="student-filter__checkbox__label">
            Presencial / a distancia
          </label>
          <div>
            <input type="checkbox" />
            <span className="student-filter__checkbox--span">Presencial</span>
          </div>
          <div>
            <input type="checkbox" />
            <span className="student-filter__checkbox--span">Remoto</span>
          </div>
        </div>
        <div className="student-filter__checkbox">
          <label className="student-filter__checkbox__label">
            Posibilidad traslado
          </label>
          <div>
            <input type="checkbox" />
            <span className="student-filter__checkbox--span">Si</span>
          </div>
          <div>
            <input type="checkbox" />
            <span className="student-filter__checkbox--span">No</span>
          </div>
        </div>
      </form>
    </div>
  );
};
