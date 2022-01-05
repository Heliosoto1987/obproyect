import React from "react";

export const SortSelect = ({ handleRead }) => {
  return (
    <div className="student-table__mainsortfield">
      <button
        onClick={handleRead}
        name="nombre"
        className="student-table__mainsortfield--btn"
      >
        NOMBRE{" "}
        <img
          className=""
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
      <button
        onClick={handleRead}
        className="student-table__mainsortfield--btn"
        name={"ciudad"}
      >
        CIUDAD{" "}
        <img
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
      <button
        onClick={handleRead}
        className="student-table__mainsortfield--btn"
        name={"pais"}
      >
        PAIS{" "}
        <img
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
      <button
        onClick={handleRead}
        className="student-table__mainsortfield--btn"
        name={"telefono"}
      >
        TELEFONO{" "}
        <img
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
      <button
        onClick={handleRead}
        className="student-table__mainsortfield--btn"
        name={"correo"}
      >
        CORREO ELECTRONICO{" "}
        <img
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
      <button
        onClick={handleRead}
        className="student-table__mainsortfield--btn"
        name={"ETIQUETAS"}
      >
        ETIQUETAS{" "}
        <img
          src="https://github.com/Heliosoto1987/obproyect/blob/main/public/assets/icon(1).png?raw=true"
          alt="lupa"
        ></img>
      </button>
    </div>
  );
};
