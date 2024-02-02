import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import QuestionAnswerPage from "./pages/question-answer";
import BookPage from "./pages/books";
import SermonsPage from "./pages/sermons";
import WeBelieveInPage from "./pages/believe";
import ContactPage from "./pages/contact";

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<WeBelieveInPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/sermons" element={<SermonsPage />} />
      <Route path="/contactUs" element={<ContactPage />} />
      <Route path="/questionAnswer" element={<QuestionAnswerPage />} />
    </Routes>
  );
};
export default App;
