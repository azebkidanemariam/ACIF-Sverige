import FooterComponent from "../component/footer/footer";
import ContactForm from "../component/contact/contactUs";
import Navigate from "../navigation/navigation";
function ContactPage() {
  return (
    <div>
      <Navigate />
      <ContactForm />
      <FooterComponent />
    </div>
  );
}
export default ContactPage;
