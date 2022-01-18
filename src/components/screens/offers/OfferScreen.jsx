//vendor
import React from "react";
//components
import { Aside } from "../../aside/Aside";
//styles
import "../../../styles/screen/offers/offers.css";

export const OfferScreen = ({ history }) => {
  return (
    <div className="offers">
      <Aside history={history} />
      <div>Soy Espacio para Ofertas</div>
    </div>
  );
};
