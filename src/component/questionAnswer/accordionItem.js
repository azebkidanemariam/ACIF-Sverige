import { accordionData } from "./accordionData";
import { Accordion } from "./accordion";
import "./accordion.css";

export const AccordionItem = () => {
  return (
    <div className="demo">
      <div className="container">
        <div className="panel-group">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};
