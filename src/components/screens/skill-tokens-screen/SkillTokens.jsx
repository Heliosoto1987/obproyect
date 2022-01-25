//vendor
import React from "react";
//vendor
import "../../../styles/screen/skill-tokens-screen/skill-tokens.css";
import { StudentFileScreen } from "../student-file-screen/StudentFileScreen";

export const SkillTokens = () => {
  return (
    <div className="skill-tokens">
      <div className="skill-tokens__box">
        <div className="">
          <StudentFileScreen />
        </div>
      </div>
    </div>
  );
};
