import React, { useState } from "react";

const Card = ({ title, content, extraClasses = [] }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="col-12 col-md mb-4 card-container">
      <div className="card border-0 shadow-lg">
        <div
          className={`card-body d-flex flex-column ${extraClasses.join(" ")}`}
        >
          <h4 className="card-title" style={{ color: "#146356" }}>
            {title}
          </h4>
          <p
            className="card-text text-start flex-grow-1"
            style={{ fontFamily: "Jockey one" }}
          >
            {showFullContent ? content : `${content.slice(0, 400)}...`}
          </p>
          <button onClick={toggleContent} className="btn btn-link">
            {showFullContent ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
