import React from "react";

//styles
import "../../../styles/screen/customers/customers.css";

import { StudentTable } from "../student-table-screen/StudentTable";

export const Customers = ({ history }) => {
  return (
    <div className="customers">
      <StudentTable history={history} />
    </div>
  );
};
