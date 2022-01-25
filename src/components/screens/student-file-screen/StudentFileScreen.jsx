//vendor
import React from "react";
//styles
import "../../../styles/screen/student-file-screen/student-file.css";
import { SecondBox } from "./SecondBox";

export const StudentFileScreen = ({ history }) => {
  return (
    <React.Fragment>
      <div className="student-file-screen__bar">
        <span className="student-file-screen__bar--first">
          Candidatos {"<"}{" "}
        </span>
        <span className="student-file-screen__bar--second">
          Nombe y Apellido
        </span>
      </div>
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
            <div className="student-file-screen__form--fixed">
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Enlace a LinkedIn
                </label>
                <input
                  className="student-file-screen__form--inputs"
                  type="text"
                />
              </div>
              <div className="student-file-screen__left--box ">
                <label className="student-file-screen__form--labels">
                  Estado Laboral
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
          </form>
        </div>
        <SecondBox />
      </div>
    </React.Fragment>
  );
};
