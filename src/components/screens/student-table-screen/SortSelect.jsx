//vendor
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
        UBICACIÓN{" "}
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
        TELEFONO{" "}
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
        TECNOLOGÍAS{" "}
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
        ESTADO
      </button>
    </div>
  );
};
