import React from "react";
import { Aside } from "../../aside/Aside";
import { NavBarSearch } from "../../navbar/NavBarSearch";

//styles
import "../../../styles/screen/customers/customers.css";

export const Customers = () => {
  return (
    <div className="customers">
      <Aside />
      <NavBarSearch />
    </div>
  );
};
