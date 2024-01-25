import React from "react";
import "./home.css";
import waterfallvideoBg from "../../asset/waterfallBg.mp4";
import churchBg from "../../asset/cross.jpg";
import PassoverBg from "../../asset/passover.jpg";
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
        <h4 className="card-title pb-2 pt-2" style={{ color: "#146356" }}>
          Welcome to ACIF, Sweden!
        </h4>
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
          <h4 className="card-title pb-2 pt-2">
            Apostolic Church international Fellowship
          </h4>
        </div>
      </div>
    </div>
  </div>
);

const EventCard = ({ imgSrc, title, details }) => (
  <div className="col-12 col-md mb-4 card-container">
    <div className="card card-border5 d-flex flex-column border-0 shadow-lg align-items-stretch">
      <img
        src={imgSrc}
        className="card-img-top card-border img-one"
        alt="..."
      />

      <div className="card-body d-flex flex-fill flex-column">
        <h4 className="card-title">{title}</h4>
        <div className="card-text pt-3 mb-4">{details}</div>
      </div>
    </div>
  </div>
);

const EventSection = () => (
  <div className=" row d-flex justify-content-center mt-4 card-body text-start text-secondary ">
    <div className="row gap-2 p-0">
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
        imgSrc={PassoverBg}
        title={"Passover "}
        details={
          <EventDetail
            title="Passover Confrence"
            location="Oslo, Norway"
            date="March 29th - March 31st, 2024"
            time="To be announced..."
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
                className="link-button shadow-lg"
              >
                Book Hotel
              </a>
            </div>
          </>
        }
      />
      <EventCard
        imgSrc={holyspiritBg}
        title={"Bible Study & Prayer"}
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
  <div className="col-12 col-md mb-4  card-container">
    <div className="card border-0 shadow-lg ">
      <div className={`card-body ${extraClasses.join(" ")}`}>
        <h4 className="card-title" style={{ color: "#146356" }}>
          {title}
        </h4>
        <p
          className="card-text text-start"
          style={{ fontFamily: "Jockey one" }}
        >
          {content}
        </p>
      </div>
    </div>
  </div>
);
function HomeComponent() {
  return (
    <div className="container-fluid m-0 p-0">
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
            style={{ height: "500px" }}
          />
        </figure>

        <figcaption className="glassy-text position-absolute  top-50 translate-middle-y px-3 py-2">
          <h1 className="fs-2 fs-sm-3 fs-md-4 fs-lg-5 fs-xl-5 mb-2">
            Apostolic Church International Fellowship
          </h1>
          <h3 className="fs-4 fs-sm-5 fs-md-5 fs-lg-5 fs-xl-5 mb-2">
            “Hear, O Israel: The LORD our God is one LORD"
          </h3>
          <p className="mb-0">Deuteronomy 6:4</p>
        </figcaption>
      </div>

      <div className="container ">
        <WelcomeSection />
        <EventSection />
        <DailyVerses />

        <div className="d-flex justify-content-center mt-4 text-start ">
          <div className="row ">
            <Card
              title="Faith"
              content="Faith is a foundational and transformative aspect of the believer's relationship with God. Hebrews 11:1 provides a succinct definition, describing faith as the assurance of things hoped for and the conviction of things not seen. It goes beyond mere intellectual assent, encompassing a deep trust and reliance on God's promises and character.

              Throughout the Bible, faith is exemplified in the lives of individuals like Abraham, who, in response to God's call, 'believed the Lord, and he credited it to him as righteousness' (Genesis 15:6). Faith is not passive; it prompts obedient action and perseverance in the face of challenges. The New Testament emphasizes salvation through faith in Jesus Christ, emphasizing that believers are justified by faith apart from works (Romans 3:28, Galatians 2:16).
              
              In essence, biblical faith involves a confident and active trust in God's Word and a reliance on His character, leading to a transformed life marked by obedience, perseverance, and a deepening relationship with the Almighty"
              extraClasses={["card-one", "mh-100", "cards"]}
            />

            <Card
              title="Love"
              content="
              
Biblical love, beautifully outlined in 1 Corinthians 13:4-7, is a multifaceted virtue that encapsulates essential qualities for meaningful and enduring relationships. It is a patient love that withstands the tests of time, demonstrating resilience and understanding in the face of challenges. This love is characterized by kindness, a selfless and benevolent disposition that seeks the well-being of others. It embraces humility, rejecting envy, pride, and dishonor, fostering a spirit of mutual respect. Forgiveness and endurance are intrinsic to this enduring love, allowing for growth and reconciliation.

This love extends beyond transient emotions, serving as a guiding principle for compassionate and virtuous commitments in relationships. It reflects the divine nature of God's unwavering and unconditional love for humanity, encouraging believers to embody these qualities in their interactions with others, thereby fostering an environment of love, grace, and understanding."
              extraClasses={["card-four", "mh-100"]}
            />

            <Card
              title="Grace"
              content=" Biblically, grace is a profound and undeserved manifestation of God's favor, mercy, and kindness toward humanity. It is an expression of divine love that transcends human merit, offering forgiveness, salvation, and blessings despite our inherent shortcomings and sins. Grace is a central theme in the New Testament, epitomized through the redemptive work of Jesus Christ. Believers receive God's grace not as a result of their own efforts or righteousness but through faith in Christ.

              Ephesians 2:8-9 encapsulates this concept, emphasizing that salvation is a gift of God's grace and not something earned through human works: For by grace you have been saved through faith, and that not of yourselves; it is the gift of God, not of works, lest anyone should boast. Grace, in its essence, underscores God's unmerited favor and the transformative power of His love in the lives of those who trust in Him."
              extraClasses={["card-three", "mh-100"]}
            />

            <Card
              title="Hope"
              content="In the profound tapestry of biblical teachings, hope is a virtue deeply embedded in the fabric of faith and trust in God's promises. It transcends mere optimism, representing a confident expectation anchored in the unchanging character of God. This biblical hope is a steadfast assurance that extends beyond the present circumstances, anticipating future blessings, redemption, and the fulfillment of divine purposes.

              The Bible often portrays hope as an anchor for the soul (Hebrews 6:19), providing unwavering stability amid life's tumultuous seas. Romans 15:13 beautifully captures the essence of this hope, expressing a desire for believers to be filled with joy and peace as they trust in the God of hope, allowing them to overflow with hope through the power of the Holy Spirit.
              
              Biblical hope is not a mere wish or desire; it is a confident expectation grounded in the goodness, faithfulness, and sovereignty of God. It serves as a guiding light in the darkness of uncertainty, sustaining believers with the assurance that God's promises will be fulfilled and pointing them toward the eternal hope found in Him."
              extraClasses={["card-two", "mh-100"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeComponent;
