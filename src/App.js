import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PageLayout />} />
        
      </Routes>
    </Router>
  );
}

export default App;
