import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import churchBg from "../../asset/cross.jpg";
import londonBg from "../../asset/london.jpg";
import holyspiritBg from "../../asset/manpray.jpg";
import welcomeBg from "../../asset/welcome.jpg";
import "bootstrap/dist/css/bootstrap.css";
import DailyVerses from "../dailyverse";

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
const WelcomeSection = () => (
  <div className="container mt-5 border-1 shadow-lg">
    <div className="row d-flex align-items-stretch">
      <div className="col-md-6 p-0">
        <img
          src={welcomeBg}
          className="card-img-top image-fluid h-100"
          alt="..."
        />
      </div>
      <div className="col p-4">
        <h5 className="card-title pb-2 pt-2">Welcome to ACIF, Sweden!</h5>
        <div className="d-flex flex-column h-50">
          <p className="flex-grow-1 card-text text-muted">
            Greetings in the name of our Lord and Savior, Jesus Christ! We are
            delighted to have you visit our church's online home. Whether you
            are a longtime member or a first-time visitor, we extend a heartfelt
            welcome to you. At ACIF, we believe in the power of faith, love, and
            community. Our church is not just a building; it's a family. As you
            navigate through our website, we hope you sense the warmth and love
            that defines our congregation. Whether you are seeking a place of
            worship, spiritual growth, or a community to connect with, we are
            here for you. Join us for our uplifting worship services, engaging
            events, and meaningful fellowship opportunities. Explore the various
            ministries that cater to all age groups and interests, and discover
            the ways you can get involved. Feel free to reach out if you have
            any questions or if there's anything we can assist you with. We are
            here to serve and support one another on our faith journeys. Thank
            you for taking the time to explore our website. We look forward to
            the possibility of meeting you in person and sharing the joy of
            Christ together. May God's love and blessings be with you always! In
            Christ's love,
          </p>
          <h5 className="card-title pb-2 pt-2">
            Apostolic Church international Fellowship
          </h5>
        </div>
      </div>
    </div>
  </div>
);

const EventCard = ({ imgSrc, title, details }) => (
  <div className="col-12 col-md-4 mb-4">
    <div className="card d-flex flex-column border-0 shadow-lg align-items-stretch">
      <img
        src={imgSrc}
        className="card-img-top card-border img-one"
        alt="..."
      />

      <div
        className="card-body d-flex flex-fill flex-column"
        style={{ minHeight: "200px", height: "300px" }}
      >
        <h5 className="card-title">{title}</h5>
        <div className="card-text pt-3">{details}</div>
      </div>
    </div>
  </div>
);

const EventSection = () => (
  <div className="d-flex justify-content-center mt-4 card-body container text-start text-secondary">
    <div className="row">
      <EventCard
        imgSrc={churchBg}
        title={"Place Of Worship"}
        details={
          <EventDetail
            title="Sunday Service"
            location="Borgenvägen 16, Danderyd"
            date="Every Sunday"
            time="13:00 - 17:00"
          />
        }
      />
      <EventCard
        imgSrc={londonBg}
        title={"Confrences"}
        details={
          <>
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
          </>
        }
      />
      <EventCard
        imgSrc={holyspiritBg}
        title={"Weekly Bible Study & Prayer"}
        details={
          <>
            <EventDetail
              title="Tuesday Prayer Meetings"
              location="Ormängsgatan 61B, Hässelby"
            />
            <hr />
            <EventDetail
              title="Friday Prayer Meetings"
              location="Folkungavägen 26, Järfalla"
            />
          </>
        }
      />
    </div>
  </div>
);
const Card = ({ title, content, extraClasses = [] }) => (
  <div className="col-12 col-md-3 mb-4">
    {/* <div className="col-12 col-sm-6 col-md-4 mb-4"> */}
    <div className="card border-0 shadow-lg">
      <div className={`card-body ${extraClasses.join(" ")}`}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-start">{content}</p>
      </div>
    </div>
  </div>
);
function HomeComponent() {
  return (
    <div className="pt-6">
      <div className="pt-6 position-relative d-flex flex-column">
        <figure
          className="position-relative overflow-hidden"
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <video
            src={waterfallvideoBg}
            autoPlay
            loop
            muted
            alt="A background video of a waterfall"
            className="w-100"
            style={{ height: "400px", opacity: "0.4" }}
          />
        </figure>
        <figcaption className="glassy-text position-absolute  top-50 translate-middle-y px-3 py-2">
          <h1 className="fs-2 fs-sm-3 fs-md-4 fs-lg-5 fs-xl-5 mb-2">
            Apostolic Church International Fellowship
          </h1>
          <h3 className="fs-4 fs-sm-5 fs-md-5 fs-lg-5 fs-xl-5 mb-2">
            “Hear, O Israel: The LORD our God is one LORD"
          </h3>
          <h5 className="fs-6 fs-sm-7 fs-md-7 fs-lg-7 fs-xl-7 mb-0">
            Deuteronomy 6:4
          </h5>
        </figcaption>
      </div>

      <div className="container ">
        <DailyVerses />
        <WelcomeSection />
        <EventSection />

        <div className="d-flex justify-content-center mt-4 text-start">
          <div className="row">
            <Card
              title="The Love of Jesus"
              content="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
              extraClasses={["card-one", "mh-100"]}
            />

            <Card
              title="Conferences"
              content="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
            />

            <Card
              title="Bible Study & Prayer"
              content="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
              extraClasses={["card-three", "mh-100"]}
            />

            <Card
              title="Card title "
              content="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
              extraClasses={["card-two", "mh-100"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
