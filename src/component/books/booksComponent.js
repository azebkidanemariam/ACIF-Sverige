import React from "react";
import "./books-module.css";
import { Carousel } from "react-bootstrap";
import Songs from "../../asset/amharicsongs.jpg";
import Bible from "../../asset/bibleBg.jpg";

function BooksComponent() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <div className=" container mt-4">
        <Carousel>
          <Carousel.Item>
            <img className="card-img" src={Songs} alt="First slide" />
            <Carousel.Caption>
              <a
                href="/books/AmharicSongs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm opacity-75 b-0"
                style={{ backgroundColor: "#146356", color: "#fff" }}
              >
                <h3>Click to Open Amharic Songs</h3>
              </a>
              <p>
                Explore our collection of Amharic songs and hymns for spiritual
                inspiration.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="card-img" src={Bible} alt="Second slide" />
            <Carousel.Caption>
              <a
                href="/books/ExplanationtoMattew28_19.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm opacity-75"
                style={{ backgroundColor: "#146356", color: "#fff" }}
              >
                <h3>Click to Open Matthew 28:19 Explained</h3>
              </a>
              <p>
                Discover the deeper meaning behind Matthew 28:19 with our
                detailed explanation.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="p-3 text-black text-center">
        <h2 className="mb-4">
          Welcome to Our Spiritual Books and Tracts Section
        </h2>
        <p>
          Welcome to our Spiritual Books and Tracts section, where you'll find a
          curated collection of insightful literature and tracts aimed at
          nurturing your spiritual journey and deepening your faith in Christ.
          Dive into a world of inspiration, wisdom, and profound insights as you
          explore our handpicked selection of books and tracts that cover a wide
          range of topics, including prayer, biblical studies, Christian living,
          spiritual growth, and much more.
        </p>
        <p>
          Whether you're seeking encouragement during challenging times, seeking
          to deepen your understanding of scripture, or simply looking for
          inspiration to enrich your spiritual life, you'll find a wealth of
          resources waiting to uplift and edify you.
        </p>
        <p>
          Explore our collection today on a journey of spiritual exploration and
          discovery. May these books and tracts serve as light, guiding you
          closer to God and help you to live a life rooted in love, faith, and
          purpose.
        </p>
      </div>
    </div>
  );
}
export default BooksComponent;
