import React from "react";
import { AccordionItem } from "../component/questionAnswer/accordionItem";
import SundaySchoolComponent from "../component/sunday-school/sschoolcomponent";
import Navigate from "../navigation/navigation";
function SundaySchoolPage() {
  return (
    <div>
      <Navigate />
      <AccordionItem />
      <SundaySchoolComponent />
    </div>
  );
}
export default SundaySchoolPage;
