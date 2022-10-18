import React from "react";
import "./home.css";
import videoBg from "../../asset/videoBg.mp4";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import repentBg from "../../asset/repent.jpg";
import babtismBg from "../../asset/babtism.jpg";
import holyspiritBg from "../../asset/holyspirit.jpg";
import lovedBg from "../../asset/loved.jpg";
import raisedhandsBg from "../../asset/raisedhands.jpg";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

function HomeComponent() {
  return (
    <div className="container">
      <div className="container-video">
        <figure>
          <video
            src={waterfallvideoBg}
            autoPlay
            loop
            muted
            className="card-img-top opacity-75 width-100%"
            alt="A background video of sky view"
          />
        </figure>
          <figcaption className="mb-20">
            <h1>Apostolic Church of Sweden</h1>
            <h3>
              “Hear, O Israel The Lord Our God <br></br>the Lord is One"
            </h3>
            <h5>
              <mark> Deuteronomy 6:4</mark>
            </h5>
          </figcaption>
      </div>
      {/*    <img
        src="https://www.biblica.com/wp-content/uploads/header_listen_online.jpg"
        className="card-img-top opacity-75"
        alt="..."
      /> */}
      <div className="d-flex justify-content-center mt-4 card-body">
        <div className="row ">
          <div className="col">
            <div className="card card-border">
              <img
                src={repentBg}
                className="card-img-top opacity-75 card-border img-one"
                style={{ backgroundColor: "#FCDFD8" }}
                alt="..."
              />

              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.Some quick example text to build on the card title and
                  make up the bulk of the card's content.Some quick example text
                  to build on the card title and make up the bulk of the card's
                  content.
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
                className="card-img-top opacity-75"
                style={{ backgroundColor: "#FCDFD8" }}
                alt="..."
              />

              <div className="card-body card-one ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick
                  example text to build on the card title and make up the bulk
                  of the card's content. Some quick example text to build on the
                  card title and make up the bulk of the card's content. Some
                  quick example text to build on the card title and make up the
                  bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick
                  example text to build on the card title and make up the bulk
                  of the card's content. Some quick example text to build on the
                  card title and make up the bulk of the card's content Some
                  quick example text to build on the card title and make up the
                  bulk of the card's content.v Some quick example text to build
                  on the card title and make up the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick
                  example text to build on the card title and make
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content. Some quick example text to build on the card title
                  and make up the bulk of the card's content. Some quick example
                  text to build on the card title and make up the bulk of the
                  card's content. Some quick example text to build on the card
                  title and make up the bulk of the card's content. Some quick
                  example text to build on the card title and make
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
