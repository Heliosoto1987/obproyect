//vendor
import React, { useState } from "react";
//styles
import "../../../styles/screen/student-table/student-table.css";
//components
import { AddStudents } from "../add-students-screen/AddStudents";
import { StudentFilter } from "./StudentFIlter";
import { StudentData } from "./StudentData";
import { SortSelect } from "./SortSelect";
import { useForm } from "../../../hooks/useForm";
//router
import { useNavigate } from "react-router-dom";
//hooks

const rawData = [
  {
    id: "1",
    nombre: "Helio Javier Soto",
    ciudad: "Madrid",
    pais: "España",
    telefono: "654190536",
    correo: "heliosoto17@gmail.com",
    etiquetas: "html",
  },
  {
    id: "2",
    nombre: "Carlos Alberto Jesus Marin",
    ciudad: "Barranquilla",
    pais: "Colombia",
    telefono: "619085133",
    correo: "Carlosal@hotmail.com",
    etiquetas: ["html"],
  },
  {
    id: "3",
    nombre: "Alejandra Soto ",
    ciudad: "Maracaibo",
    pais: "Venezuela",
    telefono: "621232156",
    correo: "Alejandra@hotmail.com",
    etiquetas: ["html, css, git"],
  },
  {
    id: "4",
    nombre: "Neidy Prieto",
    ciudad: "Maracaibo",
    pais: "Venezuela",
    telefono: "123213566",
    correo: "Neidy@hotmail.com",
    etiquetas: ["html"],
  },
  {
    id: "5",
    nombre: "Guido Crespo",
    ciudad: "Miami",
    pais: "USA",
    telefono: "265665689",
    correo: "Guido@hotmail.com",
    etiquetas: ["html"],
  },
];

const filterByValue = (value, inputchange) =>
  value.toLowerCase().includes(inputchange.toLowerCase());

export const StudentTable = () => {
  const [data, setData] = useState(rawData);
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, handleInputChange] = useForm({
    inputChange: "",
    inputChangeLabels: "",
  });
  const handleSort = (e, x, y) => {
    if (x[e] < y[e]) {
      return -1;
    }
    if (x[e] > y[e]) {
      return 1;
    }
    return 0;
  };

  const navigate = useNavigate();
  const handlePush = () => {
    navigate("/sortSelect", {
      replace: true,
    });
  };
  const handleRead = (e) => {
    const name = e.target.name;
    setData((prevState) => {
      const copyState = [...prevState];
      copyState.sort((x, y) => handleSort(name, x, y));
      return copyState;
    });
  };
  const { inputChange, inputChangeLabels } = formValues;
  const buildRow = data
    .filter(
      ({ pais, nombre, correo }) =>
        filterByValue(pais, inputChange) ||
        filterByValue(nombre, inputChange) ||
        filterByValue(correo, inputChange) ||
        filterByValue(correo, inputChange)
    )
    .map((value) => (
      <StudentData
        key={value.id}
        className={"studentdata"}
        nombre={value.nombre}
        ciudad={value.ciudad}
        pais={value.pais}
        telefono={value.telefono}
        correo={value.correo}
        etiquetas={value.etiquetas}
      />
    ));
  const handleAddStudent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="student-table">
      <header className="student-table__header">
        <h2 className="loginleftcomponent__title  student-table__header--title">
          OpenBootcamp&nbsp;
          <span className="loginleftcomponent__title--span"> | Alumnos</span>
        </h2>
        <div>
          <span className="student-table__header--circle">NA</span>
          <span className="student-table__header--name">UserName</span>
        </div>
      </header>
      <div className="student-table__main">
        <div className="student-table__mainstudents">
          <section className="student-table__main--header">
            <div className="student-table__mainheader--firstbox">
              <label className="">Alumnos</label>
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Buscar por Nombre, Email o Palabra clave..."
                name="inputChange"
                value={inputChange}
              />
            </div>
            <button
              onClick={handleAddStudent}
              className="student-table__main--button"
            >
              + Añadir alumnos
            </button>
          </section>
          <SortSelect handleRead={handleRead} />
          {buildRow}
        </div>
        <div className="student-table__mainfilter">
          <StudentFilter inputChangeLabel={inputChangeLabels} />
        </div>
      </div>
      <AddStudents isOpen={isOpen} setIsOpen={setIsOpen} />
      <button style={{ marginLeft: "100px" }} onClick={handlePush}>
        Provisional
      </button>
    </div>
  );
};
