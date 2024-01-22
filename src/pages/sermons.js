import React from "react";

import Navigate from "../navigation/navigation";
import FooterComponent from "../component/footer/footer";
import SermonComponent from "../component/sermon/sermonComponent";
function SermonsPage() {
  return (
    <div className="container-fluid p-0">
      <Navigate />
      <SermonComponent />
      <FooterComponent />
    </div>
  );
}
export default SermonsPage;
