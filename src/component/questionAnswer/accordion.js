import { useState } from "react";
import "./accordion.css";
import { FaChevronUp, FaChevronCircleDown } from "react-icons/fa";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <div className="panel-group" onClick={() => setIsActive(!isActive)}>
        <div className="panel-heading">
          <div className="panel-title d-flex justify-content-between align-items-center">
            {title}
            <div className="panel-collapse">
              {isActive ? <FaChevronUp /> : <FaChevronCircleDown />}
            </div>
          </div>
        </div>
      </div>
      <div className="panel-body">{isActive && <p>{content}</p>}</div>
    </div>
  );
};
