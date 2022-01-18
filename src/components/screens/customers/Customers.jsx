import React from "react";
import { NavBarSearch } from "../../navbar/NavBarSearch";

//styles
import "../../../styles/screen/customers/customers.css";
import { Aside } from "../../aside/Aside";

export const Customers = ({ history }) => {
  return (
    <div className="customers">
      <Aside history={history} />
      <NavBarSearch />
    </div>
  );
};
