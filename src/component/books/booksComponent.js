import "./books-module.css";
import Songs from "../../asset/amharicsongs.jpg";
import Bible from "../../asset/bibleBg.jpg";

function BooksComponent() {
  return (
    <div className="container mt-4 w-100">
      <div className="d-flex justify-content-center align-items-center mt-4 card-body">
        <div className="row ">
          <div className="col-12 col-md-6 mt-2">
            <div className="card card-border border-0">
              <img src={Songs} className="card-img-top  img-one" alt="..." />
              <a
                href="/books/AmharicSongs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" link-button shadow-lg"
                style={{
                  backgroundColor: "#D1DBF5",
                  color: "#146356",
                  fontWeight: "900",
                }}
              >
                All Amharic Songs
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <div className="card card-border border-0">
              <img src={Bible} className="card-img-top  img-one" alt="..." />
              <a
                href="/books/ExplanationtoMattew28_19.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" link-button shadow-lg"
                style={{
                  backgroundColor: "#D1DBF5",
                  color: "#146356",
                  fontWeight: "900",
                }}
              >
                Matthew 28:19 Explained- Part Two
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="flex-1 text-black text-center text-sm px-3 py-10 shadow-lg container">
        Welcome to our "Christian Spiritual Books and Tracts" section, where
        you'll find a curated collection of insightful literature and tracts
        aimed at nurturing your spiritual journey and deepening your faith. Dive
        into a world of inspiration, wisdom, and profound insights as you
        explore our handpicked selection of books and tracts that cover a wide
        range of topics, including prayer, meditation, biblical studies,
        Christian living, spiritual growth, and much more. Discover timeless
        classics and contemporary works penned by renowned Christian authors and
        scholars, each offering unique perspectives and valuable teachings to
        guide you on your path of faith. Whether you're seeking encouragement
        during challenging times, seeking to deepen your understanding of
        scripture, or simply looking for inspiration to enrich your spiritual
        life, you'll find a wealth of resources waiting to uplift and edify you.
        Explore our collection today and embark on a transformative journey of
        spiritual exploration and discovery. May these books and tracts serve as
        beacons of light, guiding you closer to God and empowering you to live a
        life rooted in love, faith, and purpose.
      </p>
    </div>
  );
}
export default BooksComponent;
