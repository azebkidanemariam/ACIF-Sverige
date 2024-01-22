import FooterComponent from "../component/footer/footer";
import ContactForm from "../component/sunday-school/sschoolcomponent";
import Navigate from "../navigation/navigation";
function ContactPage() {
  return (
    <div className="container-fluid p-0">
      <Navigate />
      <ContactForm />
      <FooterComponent />
    </div>
  );
}
export default ContactPage;
