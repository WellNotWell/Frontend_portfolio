import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ComicPage from "./pages/ComicPage";
import "./css/header_style.css";
import "./css/comic_style.css";
import "./css/main_style.css";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/comic" element={<ComicPage />} />
    </Routes>
  </Router>
);

export default App;
