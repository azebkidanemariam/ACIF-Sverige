import { accordionData } from "./accordionData";
import { Accordion } from "./accordion";
import "./accordion.css";

export const AccordionItem = () => {
  return (
    <div className="demo container mt-4 ">
      <div className="container">
        <div className="panel-group">
          {accordionData.map(({ title, content, verse }) => (
            <Accordion title={title} content={content} verse={verse} />
          ))}
        </div>
      </div>
    </div>
  );
};
