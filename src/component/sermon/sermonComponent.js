import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  sermon1Content,
  sermon2Content,
  sermon3Content,
  sermon4Content,
} from "./content";

import sermonImage1 from "../../asset/army.jpg";
import sermonImage2 from "../../asset/prayingwoman.jpg";
import sermonImage3 from "../../asset/harvest2.jpg";
import sermonImage4 from "../../asset/worship.jpg";

const SermonComponent = () => {
  const [showMoreSermon1, setShowMoreSermon1] = useState(false);
  const [showMoreSermon2, setShowMoreSermon2] = useState(false);
  const [showMoreSermon3, setShowMoreSermon3] = useState(false);
  const [showMoreSermon4, setShowMoreSermon4] = useState(false);

  const wordsToShowSermon1 = 65;
  const wordsToShowSermon2 = 81;
  const wordsToShowSermon3 = 70;
  const wordsToShowSermon4 = 70;

  const renderSermon = (
    title,
    sermonContent,
    showMore,
    setShowMore,
    sermonImage,
    wordsToShow
  ) => {
    const words = sermonContent.split(" ");
    const visibleContent = showMore
      ? sermonContent
      : words.slice(0, wordsToShow).join(" ");

    return (
      <div className="col-12 col-md-4 mb-4 container">
        <div className="card shadow-lg">
          <img
            src={sermonImage}
            className="card-img-top"
            alt="Sermon"
            style={{ height: "400px" }}
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{visibleContent}</p>
            {words.length > wordsToShow && (
              <button
                className="link-button shadow-lg"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {renderSermon(
          "Ascetic Christian Army",
          sermon1Content,
          showMoreSermon1,
          setShowMoreSermon1,
          sermonImage1,
          wordsToShowSermon1
        )}
        {renderSermon(
          "Why fasting?",
          sermon2Content,
          showMoreSermon2,
          setShowMoreSermon2,
          sermonImage2,
          wordsToShowSermon2
        )}
        {renderSermon(
          "God's Harvest Season",
          sermon3Content,
          showMoreSermon3,
          setShowMoreSermon3,
          sermonImage3,
          wordsToShowSermon3
        )}
        {renderSermon(
          "Proper Worship",
          sermon4Content,
          showMoreSermon4,
          setShowMoreSermon4,
          sermonImage4,
          wordsToShowSermon4
        )}
        {renderSermon(
          "Proper Worship",
          sermon4Content,
          showMoreSermon4,
          setShowMoreSermon4,
          sermonImage4,
          wordsToShowSermon4
        )}
        {renderSermon(
          "Proper Worship",
          sermon4Content,
          showMoreSermon4,
          setShowMoreSermon4,
          sermonImage4,
          wordsToShowSermon4
        )}
      </div>
    </div>
  );
};

export default SermonComponent;
