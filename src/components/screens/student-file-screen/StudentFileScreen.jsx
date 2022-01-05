//vendor
import React from "react";
import { useNavigate } from "react-router-dom";
//styles
import "../../../styles/screen/student-file-screen/student-file.css";

export const StudentFileScreen = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/table", {
      replace: true,
    });
  };
  return (
    <React.Fragment>
      <nav className="student-file-screen__nav">
        <div>
          <i onClick={handleBack} className="fas fa-arrow-left"></i>
          <span className="student-file-screen__nav--back">Volver</span>
        </div>
        <div>
          <span className="student-file-screen__nav--circle">NA</span>
          <span>UserName</span>
        </div>
      </nav>
      <div className="student-file-screen">
        <div className="student-file-screen__left">
          <div className="student-file-screen__left__header">
            <div className="student-file-screen__left__header--picture">
              <img
                src="https://github.com/Heliosoto1987/remastered/blob/master/public/assets/Helio%201.jpg?raw=true"
                alt="HelioIMG"
              ></img>
            </div>
            <div className="student-file-screen__left--box ">
              <span>Helio Javier Soto Arevalo</span>
              <span>
                <i className="fas fa-map-marker-alt"> &nbsp;</i>
                <span className="student-file-screen__left__header--subtitle">
                  Madrid | España
                </span>
              </span>
            </div>
          </div>
          <form className="student-file-screen__form">
            <div className="student-file-screen__form--box">
              <label className="student-file-screen__form--labels">
                Nombre y Apellidos
              </label>
              <input
                className="student-file-screen__form--input"
                type="text"
                placeholder="Nombre Alumno"
              />
            </div>
            <div className="student-file-screen__form--fixed">
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Nº Teléfono
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Email
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
            </div>
            <div className="student-file-screen__form--fixed">
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Pais
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Ciudad
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
            </div>
            <div className="student-file-screen__form--fixed">
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Traslado{" "}
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Presencial
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label
                className="student-file-screen__form--labels"
                htmlFor="student-file-screen__left"
              >
                Documento CV
              </label>
              <div className="student-file-screen__form--fixed">
                <input
                  className="student-file-screen__form--inputs"
                  id="student-file-screen__left"
                  type="file"
                  style={{ display: "none" }}
                />
                <div className="student-file-screen__form--fake-btn">
                  <i className="fas fa-arrow-circle-up"></i>
                  Subir de nuevo
                </div>
                <button className="student-file-screen__form--delete">
                  <i className="fas fa-trash-alt fas2"></i> Borrar
                </button>
              </div>
            </div>
            <div className="student-file-screen__left-footer student-file-screen__left--box">
              <label className="student-file-screen__form--labels">
                Etiquetas
              </label>
              <input
                className="student-file-screen__form--input"
                placeholder="Escribe para buscar"
              ></input>
              <div>
                <span className="student-file-screen__left-footer--label-container">
                  Html&CSS <i className="fas fa-times"></i>
                </span>
                <span className="student-file-screen__left-footer--label-container">
                  REACT<i className="fas fa-times"></i>
                </span>
                <span className="student-file-screen__left-footer--label-container">
                  Angular<i className="fas fa-times"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <object
          className="student-file-screen__pdf"
          type="application/pdf"
          data="https://www.plasforte.com.ar/wp-content/uploads/2018/01/muestra-1.pdf"
        ></object>
      </div>
    </React.Fragment>
  );
};
