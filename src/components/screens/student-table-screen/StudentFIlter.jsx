//vendor
import React, { useState } from "react";
//styles
import "../../../styles/screen/student-table/student-filter.css";
//hooks
import { useForm } from "../../../hooks/useForm";

const labelsList = ["REACT", "HTML", "JAVASCRIPT"];

export const StudentFilter = () => {
  const [labelsBox, seTLabelsBox] = useState([]);
  const [formValues, handleInputChange, reset] = useForm({
    inputChangeLabel: "",
  });

  const { inputChangeLabel } = formValues;
  const findLabel = (e) => {
    e.preventDefault();
    let find = inputChangeLabel.toLowerCase();
    if (labelsList.find((value) => value.toLowerCase() === find)) {
      seTLabelsBox((prevState) => prevState + find);
      reset();
    } else {
      reset();
    }
  };

  // const buildLabelList = () => {
  //   if (labelsBox.length > 0) {
  //     return labelsBox.map((element) => console.log(element));
  //   }
  // };

  return (
    <div className="student-filter">
      <div className="student-filter__title">
        Filtros de búsquedas<i className="far fa-trash-alt"></i>{" "}
      </div>
      <form onSubmit={findLabel} className="student-filter__form">
        <label className="student-filter__labels">Etiquetas</label>
        <input
          className="student-filter__input"
          type="text"
          placeholder="Escribe para buscar...."
          name="inputChangeLabel"
          value={inputChangeLabel}
          onChange={handleInputChange}
        />
        <div>{labelsBox}</div>
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
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
