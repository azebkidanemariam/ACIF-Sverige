import React from "react";
import ContactComponent from "../component/contact/contactComponent";
import Navigate from "../navigation/navigation";
import FooterComponent from "../component/footer/footer";
function WeBelieveInPage() {
  return (
    <div className="container-fluid p-0">
      <Navigate />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}
export default WeBelieveInPage;
