//vendor
import React from "react";
import { useState } from "react/cjs/react.development";
//styles
import "../../../styles/screen/student-file-screen/second-box.css";

export const SecondBox = () => {
  const [first, setFirst] = useState(1);
  return (
    <div>
      <div className="secondbox">
        <div className="secondbox__main">
          <button
            onClick={() => setFirst(1)}
            className="secondbox__header--btn"
          >
            Habilidades
          </button>
          <button
            onClick={() => setFirst(2)}
            className="secondbox__header--btn"
          >
            Currículum Vitae
          </button>
          <button
            onClick={() => setFirst(3)}
            className="secondbox__header--btn"
          >
            Procesos
          </button>
        </div>
      </div>
      {first === 1 && (
        <div>
          <div className="secondbox__fix">
            <label className="secondbox__fix--label">Tecnologías</label>
            <input
              className="secondbox__fix--input"
              type="text"
              placeholder="Escribe para buscar"
            />
          </div>
          <div className="secondbox__fix">
            <label className="secondbox__fix--label">Idiomas</label>
            <input
              className="secondbox__fix--input"
              type="text"
              placeholder="Escribe para buscar"
            />
          </div>
        </div>
      )}
      {first === 2 && (
        <object
          aria-label="pdf show"
          className="student-file-screen__pdf"
          type="application/pdf"
          data="https://www.plasforte.com.ar/wp-content/uploads/2018/01/muestra-1.pdf"
        ></object>
      )}

      {first === 3 && (
        <div>
          <button>+ Añadir proceso</button>
        </div>
      )}
    </div>
  );
};
