import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import sermonImage1 from "../../asset/army.jpg";
import sermonImage2 from "../../asset/raisedhands.jpg";

const SermonComponent = () => {
  const [showMoreSermon1, setShowMoreSermon1] = useState(false);
  const [showMoreSermon2, setShowMoreSermon2] = useState(false);
  const sermon1Content = `
 In the battleground of life, amidst the intense spiritual warfare, the adversary constantly seeks to deceive, exploiting vulnerabilities in both strength and weakness. The Apostle Paul warns us about the cunning schemes of the devil, urging believers to stand firm against the wiles of the adversary (Ephesians 6:11; 2 Corinthians 2:11). Satan, known as the deceiver, masquerades as an angel of light, making discernment crucial (2 Corinthians 11:14). He subtly whispers lies to confuse and distract, aiming to undermine the work of God.

The scripture emphasizes the need for spiritual vigilance, urging believers to be watchful and alert. The enemy, like a roaring lion, seeks whom he may devour (1 Peter 5:8). Therefore, believers must resist the devil and stand firm in the faith (James 4:7). The spiritual battle involves recognizing the enemy's tactics and engaging in the armor of God (Ephesians 6:10-18).

In the midst of this struggle, believers are called to be separate from the world, not conforming to its patterns but rather transforming through the renewing of the mind (Romans 12:2). The Church, as the body of Christ, is called to be a peculiar people, set apart for God's purposes (1 Peter 2:9). Discernment and adherence to biblical truths are essential for navigating the complexities of the spiritual battlefield.

The Apostle John warns against false prophets and teaches that believers have received the anointing of the Holy Spirit, enabling them to discern between truth and error (1 John 2:20, 27). The Church, as the pillar and foundation of the truth, plays a crucial role in upholding sound doctrine (1 Timothy 3:15).

Ultimately, believers find strength in Christ, the captain of their salvation. By abiding in Him and relying on the guidance of the Holy Spirit, they can overcome the tactics of the enemy. The Church, empowered by the Word of God, stands as a beacon of light in a dark world, proclaiming the victory found in Christ.
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
      <div className="col-12 col-md-6 mb-4">
        <div className="card border-0 shadow-lg">
          <img src={sermonImage} className="card-img-top" alt="Sermon" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{visibleContent}</p>
            {words.length > wordsToShow && (
              <button
                className="link-button border-0"
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
          "Ascetic Christian Army",
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
