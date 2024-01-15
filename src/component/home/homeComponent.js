import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import churchBg from "../../asset/cross.jpg";
import londonBg from "../../asset/london.jpg";
import holyspiritBg from "../../asset/manpray.jpg";
import lovedBg from "../../asset/loved.jpg";
import raisedhandsBg from "../../asset/raisedhands.jpg";
import "bootstrap/dist/css/bootstrap.css";
import DailyVerses from "../dailyverse";

function HomeComponent() {
  const EventDetail = ({ title, location, date, time }) => {
    return (
      <div>
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        {date && (
          <p>
            <strong>Date:</strong> {date}
          </p>
        )}

        {time && (
          <p>
            <strong>Time:</strong> {time}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="pt-6">
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
        <DailyVerses />
        <div className="d-flex justify-content-center mt-4 card-body ">
          <div className="row ">
            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-column border-0 shadow-lg align-items-stretch">
                <img
                  src={churchBg}
                  className="card-img-top card-border img-one "
                  alt="..."
                />

                <div
                  className="card-body d-flex flex-fill flex-column"
                  style={{ height: "300px" }}
                >
                  <h5 className="card-title">Place Of Worship</h5>
                  <div className="card-text pt-3">
                    <EventDetail
                      title="Sunday Service"
                      location="Borgenvägen 16, Danderyd"
                      date="Every Sunday"
                      time="13:00 - 17:00"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-column border-0 shadow-lg align-items-stretch">
                <img
                  src={londonBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div
                  className="card-body d-flex flex-fill flex-column"
                  style={{ height: "300px" }}
                >
                  <h5 className="card-title">Conferences</h5>

                  <div className="card-text pt-3">
                    <EventDetail
                      title="ACIF Annual Conference Europe"
                      location="London, UK"
                      date="August 2nd - August 4th, 2024"
                      time="To be announced..."
                    />
                    <div className="text-center">
                      <a
                        href="https://www.smartsurvey.co.uk/s/YP0EE1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-button"
                      >
                        Book Hotel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card d-flex flex-column border-0 shadow-lg align-items-stretch">
                <img
                  src={holyspiritBg}
                  className="card-img-top card-border img-one "
                  alt="..."
                />

                <div
                  className="card-body d-flex flex-fill flex-column"
                  style={{ height: "300px" }}
                >
                  <h5 className="card-title">Weekly Bible Study & Prayer</h5>

                  <h6>18.00 - 20:00 CET</h6>
                  <div className="card-text pt-3">
                    <EventDetail
                      title="Tuesday Prayer Meetings"
                      location="Ormängsgatan 61B, Hässelby"
                    />
                    <hr />
                    <EventDetail
                      title="Friday Prayer Meetings"
                      location="Folkungavägen 26, Järfalla"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 card-body text-center">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-2 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Hello</h5>
                  <p className="card-text ">
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

            <div className="col-12 col-md-6 order-md-1 order-1">
              <div className="card">
                <img src={lovedBg} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 card-body text-center">
          <div className="row">
            <div className="col-12 col-md-6 order-md-2 order-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Raised hands</h5>
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

            <div className="col-12 col-md-6 order-md-1 order-1">
              <div className="card">
                <img src={raisedhandsBg} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4 card-body text-center">
          <div className="row">
            <div className="col-md-12 col-lg-3">
              <div className="card border-0 shadow-lg">
                {/* <img
          src="https://previews.123rf.com/images/thingass/thingass1409/thingass140900029/31914794-the-word-repent-typed-on-a-scrap-of-paper-and-pinned-to-a-cork-notice-board.jpg"
          className="card-img-top"
          style={{ backgroundColor: "#FCDFD8" }}
          alt="..."
        /> */}
                <div className="card-body card-one ">
                  <h5 className="card-title">
                    Unfathomable Love: A Sermon on the Love of Jesus
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3">
              <div className="card border-0 shadow-lg">
                {/* <img
          src="https://www.northheightscoc.org/wp-content/uploads/2020/01/baptism_from_above_baptism-Wide-16x9.jpg"
          className="card-img-top"
          alt="..."
        /> */}
                <div className="card-body">
                  <h5 className="card-title">Conferences</h5>
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3">
              <div className="card border-0 shadow-lg">
                {/* <img
          src="https://i0.wp.com/radicallychristian.com/wp-content/uploads/2014/05/Holy-Spirit.jpg?fit=600%2C350&ssl=1"
          className="card-img-top"
          alt="..."
        /> */}
                <div
                  className="card-body"
                  style={{ backgroundColor: "#DDEDDE" }}
                >
                  <h5 className="card-title">Bible Study & Prayer</h5>
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
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3">
              <div className="card border-0 shadow-lg">
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
