import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import GeneratorPage from "./components/GeneratorPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/generator" element={<GeneratorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
