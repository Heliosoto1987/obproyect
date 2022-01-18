//vendor
import React from "react";
//components
import { Aside } from "../../aside/Aside";
//vendor
import "../../../styles/screen/skill-tokens-screen/skill-tokens.css";
import { StudentFileScreen } from "../student-file-screen/StudentFileScreen";

export const SkillTokens = ({ history }) => {
  return (
    <div className="skill-tokens">
      <div className="skill-tokens__box">
        <Aside history={history} />
        <div className="">
          <StudentFileScreen />
        </div>
      </div>
    </div>
  );
};
