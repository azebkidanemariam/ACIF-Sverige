import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import churchBg from "../../asset/cross.jpg";
import londonBg from "../../asset/london.jpg";
import holyspiritBg from "../../asset/manpray.jpg";
import welcomeBg from "../../asset/welcome.jpg";
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

      <div className="container ">
        <DailyVerses />
        <div className="container mt-5 border-1 shadow-lg">
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6">
              <img
                src={welcomeBg}
                className="card-img-top image-fluid h-100"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h5 className="card-title pb-2 pt-2">Welcome to ACIF, Sweden!</h5>
              <div className="d-flex flex-column h-50">
                <p className="flex-grow-1 card-text text-muted">
                  Greetings in the name of our Lord and Savior, Jesus Christ! We
                  are delighted to have you visit our church's online home.
                  Whether you are a longtime member or a first-time visitor, we
                  extend a heartfelt welcome to you. At ACIF, we believe in the
                  power of faith, love, and community. Our church is not just a
                  building; it's a family. As you navigate through our website,
                  we hope you sense the warmth and love that defines our
                  congregation. Whether you are seeking a place of worship,
                  spiritual growth, or a community to connect with, we are here
                  for you. Join us for our uplifting worship services, engaging
                  events, and meaningful fellowship opportunities. Explore the
                  various ministries that cater to all age groups and interests,
                  and discover the ways you can get involved. Feel free to reach
                  out if you have any questions or if there's anything we can
                  assist you with. We are here to serve and support one another
                  on our faith journeys. Thank you for taking the time to
                  explore our website. We look forward to the possibility of
                  meeting you in person and sharing the joy of Christ together.
                  May God's love and blessings be with you always! In Christ's
                  love,
                </p>
                <h5 className="card-title pb-2 pt-2">
                  Apostolic Church international Fellowship
                </h5>
              </div>
            </div>
          </div>
        </div>

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
            <div className="col-md-12 col-lg-3">
              <div className="card border-0 shadow-lg ">
                <div
                  className="card-body card-one "
                  style={{ height: "800px" }}
                >
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
            <div className="col-md-12 col-lg-3 h-100">
              <div className="card border-0 shadow-lg">
                <div className="card-body" style={{ height: "800px" }}>
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
            <div className="col-md-12 col-lg-3 h-100">
              <div className="card border-0 shadow-lg">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#DDEDDE", height: "800px" }}
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
            <div className="col-md-12 col-lg-3 h-100">
              <div className="card border-0 shadow-lg">
                <div className="card-body card-two" style={{ height: "800px" }}>
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
