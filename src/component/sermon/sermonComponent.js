import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import sermonImage1 from "../../asset/loved.jpg";
import sermonImage2 from "../../asset/raisedhands.jpg"; // Import image for sermon 2

const SermonComponent = () => {
  const [showMoreSermon1, setShowMoreSermon1] = useState(false);
  const [showMoreSermon2, setShowMoreSermon2] = useState(false);
  const sermon1Content = `
  Title: "The Doctrine of One God: Unveiling the Majesty of the Almighty"

  Introduction:
  Good [morning/afternoon/evening], dear brothers and sisters in Christ. Today, our hearts are drawn to the profound and foundational truth of our faith—the doctrine of one God. In a world of diverse beliefs and varying ideologies, we anchor ourselves in the revelation of Scripture that declares the oneness and majesty of our God.
  
  Opening Scripture:
  Let us ground our reflections in Deuteronomy 6:4, where Moses declares, "Hear, O Israel: The LORD our God, the LORD is one."
  
  Body:
  
  The Uniqueness of Our God:
  The doctrine of one God sets our faith apart. It emphasizes the uniqueness and exclusivity of our God. In a culture filled with myriad deities, we stand firm in the acknowledgment that there is only one true and living God.
  
  Creator of Heaven and Earth:
  Our God is the Creator of the heavens and the earth. From the vast galaxies to the intricacies of every living being, His sovereignty reigns supreme. Understanding the oneness of God compels us to recognize His authority over all creation.
  
  The Revelation of God in Jesus Christ:
  In the person of Jesus Christ, the oneness of God is revealed in a profound way. Jesus declared, "I and the Father are one" (John 10:30). Through Christ, we see the perfect unity of the Father, the Son, and the Holy Spirit—a divine mystery that invites awe and worship.
  
  Our Response: Worship and Devotion:
  The doctrine of one God calls us to respond with wholehearted worship and devotion. As we grasp the magnitude of His oneness, our hearts are stirred to love Him with all our being. We are invited into a relationship with the One who is both transcendent and immanent.
  
  Closing Scripture:
  Let us conclude our reflection with Isaiah 45:5, where the Lord declares, "I am the LORD, and there is no other, besides me there is no God."
  
  Conclusion:
  Beloved, let the doctrine of one God be the bedrock of our faith—a truth that guides our worship, shapes our worldview, and compels us to share the message of His oneness with a world in need of salvation. May our lives reflect the glory of the One God who is worthy of all praise.
  
  Closing Prayer:
  Heavenly Father, we stand in awe of your oneness and majesty. Help us, O God, to live in light of this foundational truth and to proclaim it boldly to those around us. May our lives be a testimony to the greatness of the One God in whom we find our hope and salvation. In Jesus' name, we pray. Amen.
  `;

  const sermon2Content = `

Good morning/afternoon/evening, dear brothers and sisters in Christ. Today, we gather with hearts full of gratitude and awe to reflect on the profound and boundless love of our Lord and Savior, Jesus Christ. In a world often marked by fleeting affections and conditional love, we turn to the One whose love is unwavering and unconditional.


Let us begin our time together with a passage that encapsulates the essence of Jesus' love. In 1 John 4:16, we read, "So we have come to know and to believe the love that God has for us. God is love, and anyone who abides in love abides in God, and God abides in them."



The Essence of Jesus' Love:
Jesus' love goes beyond our human understanding. It is not based on our merits or deserving nature but flows from the very character of God. His love is sacrificial, agape love – a love that seeks the best for others, even at the cost of personal sacrifice.

Demonstrations of Love:
Throughout the Gospels, we witness tangible demonstrations of Jesus' love. He healed the sick, fed the hungry, and embraced the outcasts. His compassion knew no bounds. The ultimate manifestation of His love was on the cross, where He willingly laid down His life for our redemption.

In our Brokenness:
Jesus' love doesn't shy away from our brokenness. Instead, it reaches into the depths of our pain and offers healing. In moments of despair, His love is our anchor, providing comfort and restoration.

A Love that Transforms:
The love of Jesus is transformative. It has the power to change lives, renew hearts, and break the chains of sin. As we abide in His love, we experience a metamorphosis, becoming more like Him each day.

Closing Scripture:
Let us conclude our reflection with the words of Jesus in John 15:13, "Greater love has no one than this: to lay down one's life for one's friends."

Conclusion:
Beloved, as we leave this place today, may the love of Jesus resonate in our hearts and overflow into the lives of those around us. Let us embrace this incomparable love and, in turn, share it with a world in desperate need. May the unfailing love of Jesus be our guiding light, now and forevermore.

Closing Prayer:
Heavenly Father, we thank you for the immeasurable love demonstrated through your Son, Jesus Christ. May His love dwell richly in our hearts and compel us to love others as He has loved us. In His precious name, we pray. Amen.
  `;

  const wordsToShow = 100; // Number of words to show initially

  const renderSermon = (
    title,
    sermonContent,
    showMore,
    setShowMore,
    sermonImage
  ) => {
    const words = sermonContent.split(" ");
    const visibleContent = showMore
      ? sermonContent
      : words.slice(0, wordsToShow).join(" ");

    return (
      <div className="col-md-6 mb-4">
        <div className="card">
          <img src={sermonImage} className="card-img-top" alt="Sermon" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{visibleContent}</p>
            {words.length > wordsToShow && (
              <button
                className="btn btn-primary"
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
          "The Majesty of the One God",
          sermon1Content,
          showMoreSermon1,
          setShowMoreSermon1,
          sermonImage1
        )}
        {renderSermon(
          "Embraced by Unconditional Love",
          sermon2Content,
          showMoreSermon2,
          setShowMoreSermon2,
          sermonImage2
        )}
      </div>
    </div>
  );
};

export default SermonComponent;
