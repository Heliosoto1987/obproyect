//vendor
import React from "react";
//components
import { Aside } from "../../aside/Aside";
//styles
import "../../../styles/screen/interviews/interviews.css";

export const InterViews = ({ history }) => {
  return (
    <div className="interviews">
      <Aside history={history} />
      Soy Pantalla de Entrevistas
    </div>
  );
};
