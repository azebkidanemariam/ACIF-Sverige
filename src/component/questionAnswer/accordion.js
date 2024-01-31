import { useState } from "react";
import "./accordion.css";
import { FaChevronUp, FaChevronCircleDown } from "react-icons/fa";

export const Accordion = ({ title, content, verse = "" }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="pt-6 mt-4">
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
      <div className="panel-body">
        {isActive && (
          <>
            <p>{content}</p> <p>{verse}</p>
          </>
        )}
      </div>
    </div>
  );
};
