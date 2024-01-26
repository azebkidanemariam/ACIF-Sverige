import React from "react";
import "./contact-module.css";

import imageBg from "../../asset/bibleBg.jpg";
import wineBg from "../../asset/wine.jpg";
import oceanBg from "../../asset/repent.jpg";
import stoneBg from "../../asset/stone.jpg";
import lakeBg from "../../asset/ocean.jpg";
import manprayBg from "../../asset/manpray.jpg";

function Section({
  image,
  title,
  content,
  imageClass = "img-class image-fluid",
  imageOnLeft = true,
}) {
  return (
    <div className="mt-5  shadow-lg">
      <div
        className={`row d-flex align-items-stretch ${
          imageOnLeft ? "" : "flex-row-reverse"
        }`}
      >
        <div className="col-md-6 ">
          <img src={image} className={`${imageClass} h-100`} alt={title} />
        </div>
        <div className="col p-4">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

function ContactComponent() {
  return (
    <div className="container-fluid p-0">
      <img
        src={imageBg}
        className="img-class "
        alt="A background video of sky view"
      />
      <div className="container">
        <Section
          image={stoneBg}
          title="Salvation"
          content={
            <p className="flex-grow-1">
              While the word “salvation” has several meanings, in this writing
              it is used to express the act of saving the human soul from sin
              and its effect. The Holy Bible in: Ezek.18:4 says: “…the soul that
              sinnth, it shall die.” And in Rom 6:23 says: “For the wages of sin
              is death.” In Rom 3:12 it says: “They are all gone out of the way,
              they are together become unprofitable; …” and in verses 22-23
              says: “… for there is no difference: for all have sinned, and come
              short of the glory of God.” In Rom 5:12 also it says: “Wherefore,
              as by one man sin entered into the world, and death by sin; and so
              death passed upon all men, for that all have sinned”. Thus we
              believe that all human beings need salvation. The word of Lord
              Jesus Christ in Mat.16:26 says: “For what is a man profited, if he
              shall gain the whole world, and lose his own soul?” or what shall
              a man give in exchange for his soul?” What we can understand from
              this word is the primary and exceeding profit for man is the
              salvation of his/her soul. We believe that the human soul shall be
              saved by knowing and believing in the only God of salvation,
              repenting from all sins, being baptized in the name of the Lord
              Jesus Christ for the remission of sins, and receiving the gift of
              the Holy Ghost.
            </p>
          }
        />
        <Section
          image={wineBg}
          title="Believing In The Only God Of Salvation"
          content={
            <p className="flex-grow-1">
              Believing In The Only God Of Salvation By understanding from the
              Scriptures, we believe that the God of salvation is only one.
              Supported by key Scriptures such as Deuteronomy 6:4, Isaiah
              43:10-11, 45:21-22, and Hosea 13:4, affirming the one of God and
              His exclusive role as the Savior. Our faith centers on the Lord
              Jesus Christ as the manifestation of this singular God in form of
              man for the redemption of humanity, validated by passages like 1
              Timothy 3:16 and Matthew 1:18-23. His sacrificial death, burial,
              and resurrection, outlined in 1 Corinthians 15:3-4, form the
              essence of our belief, highlighting the necessity of acknowledging
              this unique God for salvation.
            </p>
          }
          imageOnLeft={false}
        />

        <Section
          image={oceanBg}
          title="Repenting From All Sins"
          content={
            <p className="flex-grow-1">
              We believe that repenting from all sins is one of the essentials
              for salvation. Scriptural evidences for this are the following
              among many others. Luk. 13:1-5; “… And Jesus answering unto them,
              …I tell you, nay: but, except ye repent, ye shall all likewise
              perish.” Ezek. 18:30-32; “…Repent and turn your selves from all
              your transgressions; so iniquity shall not be your ruin. Cast away
              from you all your transgressions, whereby ye have transgressed;
              and make you a new heart and a new spirit: for why will ye die, O
              house of Israel? For I have no pleasure in the death of him that
              dieth, saith the Lord God: where fore turn your selves, and live
              ye.” For repentance is one of the essentials for remission of sins
              and salvation, in Luke 24: 47 it says, “And that repentance and
              remission of sins should be preached in his name among all
              nations, beginning at Jerusalem.” To those whose hearts be pricked
              and believe the gospel of salvation, in Acts 2:38 it
              says,…Repent…” Therefore, we believe that repentance is one of the
              essentials for salvation.
            </p>
          }
        />

        <Section
          image={lakeBg}
          title="Baptism In The Name Of Jesus Christ"
          content={
            <p className="flex-grow-1">
              The commission by Jesus in Mark 16:15-16 emphasizes the universal
              spread of the gospel, the necessity of belief and baptism for
              salvation, and the consequences for disbelief. Scriptures in Mark
              16:16 and Acts 2:38 reinforce the importance of faith and baptism,
              highlighting their inseparable connection for salvation.
              Additionally, Acts 4:12 emphesizes the significance of the name of
              jesus, while 1 Peter 3.20-21 underscores the significances of
              baptism as a means of and 1 Peter 3:20-21 underscore the
              significance of baptism as a means of spiritual rebirth,
              circumcision of the heart, and putting on Christ, as outlined in
              John 3:3-6, Colossians 2:11-12, and Galatians 3:27.
            </p>
          }
          imageOnLeft={false}
        />

        <Section
          image={manprayBg}
          title="Receiving The Gift Of The Holy Ghost"
          content={
            <p className="flex-grow-1">
              Jesus' teaching to Nicodemus in John 3 emphasizes the necessity of
              spiritual rebirth, signifying being 'born again' through water and
              the Spirit for entrance into God's kingdom. This spiritual rebirth
              addresses humanity's fallen nature, highlighting the need for
              regeneration for salvation. Titus 3:4-5 underscores God's mercy
              and the 'washing of regeneration' as crucial elements, leading us
              to believe that baptism in the name of Jesus Christ and receiving
              the Holy Ghost are pivotal for salvation, as emphasized in Acts
              2:38
            </p>
          }
        />
      </div>
    </div>
  );
}

export default ContactComponent;
