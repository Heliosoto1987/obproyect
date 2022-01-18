//vendor
import React, { useState } from "react";
//styles
import "../../../styles/screen/student-table/student-table.css";
//components
import { Aside } from "../../aside/Aside";
import { AddStudents } from "../add-students-screen/AddStudents";
import { NavBarSearch } from "../../navbar/NavBarSearch";
import { StudentFilter } from "./StudentFIlter";
import { StudentData } from "./StudentData";
import { SortSelect } from "./SortSelect";
import { useForm } from "../../../hooks/useForm";

const rawData = [
  {
    id: "1",
    nombre: "Helio Javier Soto",
    ciudad: "Madrid,",
    pais: "España",
    telefono: "654190536",
    correo: "heliosoto17@gmail.com",
    tecnologias: ["HTML", "REACT", "JAVASCRIPT"],
    estado: "CONTRATADO",
  },
  {
    id: "2",
    nombre: "Carlos Alberto Jesus Marin",
    ciudad: "Barranquilla,",
    pais: "Colombia",
    telefono: "619085133",
    correo: "Carlosal@hotmail.com",
    tecnologias: ["HTML", "REACT", "JAVASCRIPT"],
    estado: "PDTN. OFERTAS",
  },
  {
    id: "3",
    nombre: "Alejandra Soto ",
    ciudad: "Maracaibo,",
    pais: "Venezuela",
    telefono: "621232156",
    correo: "Alejandra@hotmail.com",
    tecnologias: ["HTML", "REACT", "JAVASCRIPT"],
    estado: "PDTN. OFERTAS",
  },
  {
    id: "4",
    nombre: "Neidy Prieto",
    ciudad: "Maracaibo,",
    pais: "Venezuela",
    telefono: "123213566",
    correo: "Neidy@hotmail.com",
    tecnologias: ["HTML", "REACT", "JAVASCRIPT"],
    estado: "PREESELECIONADO",
  },
  {
    id: "5",
    nombre: "Guido Crespo",
    ciudad: "Miami,",
    pais: "USA",
    telefono: "265665689",
    correo: "Guido@hotmail.com",
    tecnologias: ["HTML", "REACT", "JAVASCRIPT"],
    estado: "CONTRATADO",
  },
];

const filterByValue = (value, inputchange) =>
  value.toLowerCase().includes(inputchange.toLowerCase());

export const StudentTable = ({ history }) => {
  const [data, setData] = useState(rawData);
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, handleInputChange] = useForm({
    inputChange: "",
    inputChangeLabels: "",
  });
  const handlePush = () => {
    history.push("/sortSelect");
  };
  const handleSort = (e, x, y) => {
    if (x[e] < y[e]) {
      return -1;
    }
    if (x[e] > y[e]) {
      return 1;
    }
    return 0;
  };

  const handleRead = (e) => {
    const name = e.target.name;
    setData((prevState) => {
      const copyState = [...prevState];
      copyState.sort((x, y) => handleSort(name, x, y));
      return copyState;
    });
  };
  const { inputChange } = formValues;
  const buildRow = data
    .filter(
      ({ pais, nombre, correo }) =>
        filterByValue(pais, inputChange) ||
        filterByValue(nombre, inputChange) ||
        filterByValue(correo, inputChange)
    )
    .map((value) => (
      <StudentData
        history={history}
        key={value.id}
        className={"studentdata"}
        nombre={value.nombre}
        ciudad={value.ciudad}
        pais={value.pais}
        telefono={value.telefono}
        correo={value.correo}
        etiquetas={value.etiquetas}
        tecnologias={value.tecnologias}
        estado={value.estado}
      />
    ));
  const handleAddStudent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main-student-table">
      <Aside history={history} />
      <div className="student-table">
        <NavBarSearch />
        <div className="student-table__main">
          <div className="student-table__mainstudents">
            <section className="student-table__main--header">
              <div className="student-table__mainheader--firstbox">
                <label className="">Candidatos</label>
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
            <StudentFilter />
          </div>
        </div>
        <AddStudents isOpen={isOpen} setIsOpen={setIsOpen} />
        <button style={{ marginLeft: "100px" }} onClick={handlePush}>
          Provisional
        </button>
      </div>
    </div>
  );
};
