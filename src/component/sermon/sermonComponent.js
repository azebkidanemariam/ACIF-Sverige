import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import sermonImage1 from "../../asset/army.jpg";
import sermonImage2 from "../../asset/fastingandprayer.jpg";

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
  
Matthew 9:14-17
  
  
  
  John's disciples and the Pharisees are still fasting.
  
  
  
  But the Lord says to them that they will not fast while being the bridegroom.
  
  
  
  Whose responsibility are they posting?
  
  
  
  The Pharisees are well known. They strayed from God's way until the Lord rebuked them as hypocrites. They said you don't have the word. They said you don't like coming to me. Therefore, their bridegroom is not their god, but something else.
  
  
  
  What happened to John's disciples who were not the Lord's servants? While the Church is trying to prepare the bridegrooms of the Lord, will the people be another bridegroom?



2 Corinthians 11

2; For I am jealous of you with the zeal of God, for I have betrothed you to a man to present you to Christ as a pure virgin; 2nd

3; But I fear that, as the serpent deceived Eve, your thoughts may be corrupted and changed from sincerity and purity for Christ.



Even though he asked if you are the one who will come when there is a lot of suffering, when John was told about the baptism of Jesus, he said that he rejoiced at the voice of the bridegroom. Jesus praised John's faithfulness.



Gospel John 3

29; He is the bridegroom. The bridegroom's voice makes him happy. So my joy is fulfilled.
John's disciples, however, did not seem to be able to see what John wanted to show them. Even in Acts 19, they are seen walking without the truth preached by John.



John was fasting while sweeping the road before his master came.



Gospel of Matthew 11

18; John came neither eating nor drinking, and they said, "He has a demon."



Fasting and prayer is a way of imploring the coming of the Lord.
The Lord is showing that he is the bridegroom in feeding many people. And the bridegroom is one of the Gods called Baal of Israel. In the future, when the Lord comes back in his kingdom, he showed a little bit that he will destroy hunger. It means that the Lamb's tabernacle is among the people. There is no hunger where he is. Not because there is food, but because he himself exists. He is our satisfaction. Where he is, we eat until our stomachs are full, to show that we are satisfied with him.
John's Revelation 7

15; Therefore they are before God's throne, and night and day they worship him in the sanctuary, and he who sits on the throne rests over them.

16; They shall hunger no more, and thirst no more, and the sun and all heat shall never descend upon them;

17; For the Lamb in the midst of the throne shall be their shepherd, and shall lead them to the fountain of living water; God will wipe away all tears from their eyes.
(Isaiah 54:5; Hosea 2:19,20; Rev. 21:9; 19:7)
They fast when the bridegroom is taken away.



As soon as Jesus ascended, the apostles prayed for ten days. It does not seem to be questionable that it is a prayer to which fasting is added. Because it is said that they fast when the bridegroom is taken away. And on the tenth day, the Lord rested in their hearts with His Spirit.



Acts 1

14; All these, together with the women and Mary, the mother of Jesus, and his brothers, were diligent in prayer.



The next part shows us the Holy Spirit speaking to the saints in fasting prayer.
Acts 13

2; And when these were worshiping the Lord and fasting, the Holy Spirit said: Separate Barnabas and Saul for the work I have called them.



Fasting and prayer is a devotion to bring the Lord's presence closer to us. Fasting prayer is a way of longing to find the Lord who was taken from us again.



Those who fasted while the Lord was among them did not understand His coming. That is why they are still fasting.
Gospel of John 1

9; The true light that shines for all men was coming into the world.

10; He was in the world, and the world was made by him, and the world did not know him.



If they knew, they would have said: 



Gospel of John 4

10; Jesus answered: If you had known who it was that said to you, "Give me a drink of water," you would have asked him, and he would have given you the water of life.In John 6, give us this bread every day, the fault of the people is that they did not see the appearance of the Messiah. The bread that they ate was not made so that they could see the presence of Christ. But they could not see him. But the apostles saw him and said to them, "You have the word of life, where shall we go from you?" They did not separate from the Lord because they knew that it was him.Fasting in the absence of the Lord shows that we are hungry for Him. Fasting when he is present shows that our hunger is not the Lord but something else. Just as John 6 said, give us this bread always. If the Pharisees were hungry, they would have rejoiced with him when he came. All those who said they don't want to come to me were hungry for something else. Being sad after the Lord is found for us shows that our hunger is for something other than the Lord.The Pharisees were hungry because of their religious practice. But true fasting is a way of starving the Lord and crying out that you are my longing.
Psalm 42

1; As a deer yearns for a spring of water.

Lord, so longs my soul for you.

2; My soul thirsts for the living God.

When will I arrive? When will I see God's face?

3; Always: Where is your God? They said to me

My tears became my food day and night.
  `;

  const wordsToShowSermon1 = 200;
  const wordsToShowSermon2 = 100;

  const renderSermon = (
    title,
    sermonContent,
    showMore,
    setShowMore,
    sermonImage,
    wordsToShow
  ) => {
    const words = sermonContent.split(" ");
    const visibleContent = showMore
      ? sermonContent
      : words.slice(0, wordsToShow).join(" ");

    return (
      <div className="col-12 col-md mb-4 container">
        <div className="card shadow-lg">
          <img src={sermonImage} className="card-img-top" alt="Sermon" />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{visibleContent}</p>
            {words.length > wordsToShow && (
              <button
                className="link-button shadow-lg"
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
          sermonImage1,
          wordsToShowSermon1
        )}
        {renderSermon(
          "Why fasting?",
          sermon2Content,
          showMoreSermon2,
          setShowMoreSermon2,
          sermonImage2,
          wordsToShowSermon2
        )}
      </div>
    </div>
  );
};

export default SermonComponent;
