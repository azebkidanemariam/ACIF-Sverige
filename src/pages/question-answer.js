import { AccordionItem } from "../component/questionAnswer/accordionItem";
import Navigate from "../navigation/navigation";
import FooterComponent from "../component/footer/footer";

function QuestionAnswerPage() {
  return (
    <div className="vh-100">
      <Navigate />
      <AccordionItem />
      <FooterComponent />
    </div>
  );
}
export default QuestionAnswerPage;
