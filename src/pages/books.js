import React from "react";

import Navigate from "../navigation/navigation";
import FooterComponent from "../component/footer/footer";
import BooksComponent from "../component/books/booksComponent";
function BookPage() {
  return (
    <div className="container-fluid p-0">
      <Navigate />
      <BooksComponent />
      <FooterComponent />
    </div>
  );
}
export default BookPage;
