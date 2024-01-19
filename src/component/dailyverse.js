import React from "react";

const DailyVerses = () => {
  const verses = [
    " The Lord is my shepherd; I shall not want. - Psalm 23:1",
    " For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    " The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. - Lamentations 3:22-23",
    "I can do all things through him who strengthens me. - Philippians 4:13",
    " The Lord is near to all who call on him, to all who call on him in truth. - Psalm 145:18",
    " Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    " Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you. - Deuteronomy 31:6",
    " Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
    " But seek first the kingdom of God and his righteousness, and all these things will be added to you. - Matthew 6:33",
    " The Lord is good to all, and his mercy is over all that he has made. - Psalm 145:9",
    " The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight. - Proverbs 9:10",
    "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
    " I have said these things to you, that in me you may have peace. In the world, you will have tribulation. But take heart; I have overcome the world. - John 16:33",
    " The Lord upholds all who are falling and raises up all who are bowed down. - Psalm 145:14",
    " For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord. - Romans 8:38-39",
    " Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. - Joshua 1:9",
    " He gives power to the faint, and to him who has no might he increases strength. - Isaiah 40:29",
    " I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you. - Psalm 32:8",
    " The Lord is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold. - Psalm 18:2",
    " Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved. - Psalm 55:22",
    " The Lord is gracious and merciful, slow to anger and abounding in steadfast love. - Psalm 145:8",
    " I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds. - Psalm 9:1",
    " The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song, I give thanks to him. - Psalm 28:7",
    " The Lord is my portion; I promise to keep your words. - Psalm 119:57",
    " Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him! - Psalm 34:8",
    " The Lord is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
    " Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
    " In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:6",
    " And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
    "Finally, be strong in the Lord and in the strength of his might. - Ephesians 6:10",
  ];

  const currentDay = new Date().getDate();

  return (
    <div className=" mt-5 mb-5">
      <div
        className="card border-0 shadow-lg justify-align-center align-items-center p-4"
        /* style={{ backgroundColor: "#d1dbf5" }} */
      >
        <div className="card-body ">
          <h4 className="card-title text-center mb-4">Daily Verses</h4>
          <h6
            className="card-text lead text-center "
            /*  style={{ color: "#5c98ff" }} */
          >
            {verses[currentDay - 1]}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DailyVerses;
