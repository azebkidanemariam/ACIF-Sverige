import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import repentBg from "../../asset/sundayservice.jpg";
import babtismBg from "../../asset/uk.jpg";
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
        <div className="d-flex justify-content-center mt-4 card-body">
          <div className="row ">
            <div className="col">
              <div className="card card-border d-flex flex-column">
                <img
                  src={repentBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body">
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

            <div className="col">
              <div className="card card-border d-flex flex-column">
                <img
                  src={babtismBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Conferences</h5>

                  <div className="card-text pt-3">
                    <EventDetail
                      title="ACIF Annual Conference Europe"
                      location="London, UK"
                      date="August 2nd - August 4th, 2024"
                      time="To be announced..."
                    />
                    <div className="text-center ">
                      <a
                        href="https://www.smartsurvey.co.uk/s/YP0EE1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" link-button"
                      >
                        Book Hotel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-border d-flex flex-column">
                <img
                  src={holyspiritBg}
                  className="card-img-top card-border img-one"
                  alt="..."
                />

                <div className="card-body">
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
                  <h5 className="card-title">
                    Unfathomable Love: A Sermon on the Love of Jesus
                  </h5>
                  <p className="card-text">
                    Introduction: Beloved in Christ, Today, let's explore the
                    incomprehensible love of our Lord and Savior, Jesus Christ.
                    I. Foundation of Love: God's Love for Humanity In 1 John
                    4:16, we're reminded that God is love, and His love is the
                    source of all love. II. Jesus Demonstrates Love through
                    Sacrifice John 3:16 reveals the apex of God's love – the
                    sacrifice of His Son for our redemption. III. Love that
                    Transforms: Jesus and the Sinful Woman The story in Luke
                    7:36-50 illustrates Jesus' transformative love, breaking
                    societal norms to offer redemption. IV. Incomparable and
                    Unconditional Love Romans 8:38-39 assures us that nothing
                    can separate us from Jesus' unconditional love. V.
                    Responding to the Love of Jesus Our response to Jesus' love
                    is crucial – it involves obedience to His commands and a
                    commitment to love others. Conclusion: As we ponder the love
                    of Jesus, may it inspire us to reflect His love in our
                    actions and relationships. May His love be the driving force
                    in all we do. May the overwhelming love of Jesus fill our
                    hearts and spill over into a world that desperately needs
                    it. Amen.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://www.northheightscoc.org/wp-content/uploads/2020/01/baptism_from_above_baptism-Wide-16x9.jpg"
                  className="card-img-top"
                  alt="..."
                />

                <div className="card-body">
                  <h5 className="card-title">Confrences</h5>
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
