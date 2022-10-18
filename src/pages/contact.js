import React from "react";
import ContactComponent from "../component/contact/contactComponent";
import Navigate from "../navigation/navigation";

function ContactPage(){
    return(
        <div>
            <Navigate />
            <ContactComponent /> 
        </div>
    )
}
export default ContactPage