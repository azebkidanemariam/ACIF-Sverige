import "./books-module.css";
import Songs from "../../asset/amharicsongs.jpg";

function BooksComponent() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-4 card-body">
        <div className="row ">
          <div className="col">
            <div className="card card-border">
              <img src={Songs} className="card-img-top  img-one" alt="..." />
              <a
                href="/books/AmharicSongs.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" link-button"
              >
                All Amharic Songs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BooksComponent;
