import React from "react";
import ContactComponent from "../component/contact/contactComponent";
import Navigate from "../navigation/navigation";
import FooterComponent from "../component/footer/footer";
function ContactPage() {
  return (
    <div>
      <Navigate />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}
export default ContactPage;
