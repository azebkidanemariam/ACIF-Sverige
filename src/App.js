import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import SundaySchoolPage from "./pages/sunday-school";
import { Container } from "react-bootstrap";

const App = () => {
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <Container>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/sundaySchool" element={<SundaySchoolPage />} />
      </Routes>
    </Container>
  );
};
export default App;
