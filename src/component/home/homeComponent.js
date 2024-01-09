import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import repentBg from "../../asset/repent.jpg";
import babtismBg from "../../asset/babtism.jpg";
import holyspiritBg from "../../asset/holyspirit.jpg";
import lovedBg from "../../asset/loved.jpg";
import raisedhandsBg from "../../asset/raisedhands.jpg";
import "bootstrap/dist/css/bootstrap.css";

function HomeComponent() {
  return (
    <div className="pt-6 mt-4">
      <div
        className="pt-6"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <figure>
          <video
            src={waterfallvideoBg}
            autoPlay
            loop
            muted
            alt="A background video of a waterfall"
            style={{
              height: 600,
            }}
          />
        </figure>
        <figcaption className="glassy-text">
          <h1>Apostolic Church International Fellowship</h1>
          <h3>“Hear, O Israel: The LORD our God is one LORD"</h3>
          <h5>Deuteronomy 6:4</h5>
        </figcaption>
      </div>

      <div className="container">
        <div className="d-flex justify-content-center mt-4 card-body">
          <div className="row ">
            <div className="col">
              <div className="card card-border ">
                <img
                  src={repentBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card">
                <img
                  src={babtismBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={holyspiritBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 card-body">
          <div className="row ">
            <div className="col">
              <div className="card">
                <div className="card-body ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={lovedBg} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 card-body">
          <div className="row ">
            <div className="col">
              <div className="card">
                <img src={raisedhandsBg} className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4 card-body">
          <div className="row ">
            <div className="col">
              <div className="card ">
                <img
                  src="https://previews.123rf.com/images/thingass/thingass1409/thingass140900029/31914794-the-word-repent-typed-on-a-scrap-of-paper-and-pinned-to-a-cork-notice-board.jpg"
                  className="card-img-top"
                  style={{ backgroundColor: "#FCDFD8" }}
                  alt="..."
                />

                <div className="card-body card-one ">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="card">
                <img
                  src="https://www.northheightscoc.org/wp-content/uploads/2020/01/baptism_from_above_baptism-Wide-16x9.jpg"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://i0.wp.com/radicallychristian.com/wp-content/uploads/2014/05/Holy-Spirit.jpg?fit=600%2C350&ssl=1"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body card-two">
                  <h5 className="card-title">
                    Card title the bulk of the card's content
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
