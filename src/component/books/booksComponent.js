import "./books-module.css";
import Songs from "../../asset/amharicsongs.jpg";
import Bible from "../../asset/bibleBg.jpg";

function BooksComponent() {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center mt-4 card-body">
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
    </div>
  );
}
export default BooksComponent;
