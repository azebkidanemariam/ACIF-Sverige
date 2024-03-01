import { accordionData } from "./accordionData";
import { Accordion } from "./accordion";
import "./accordion.css";

export const AccordionItem = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className="demo shadow-lg container-md text-start ">
        <div className="container p-10 h-75">
          <div className="panel-group">
            {accordionData.map(({ title, content, verse }, index) => (
              <Accordion
                key={index}
                title={title}
                content={content}
                verse={verse}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
