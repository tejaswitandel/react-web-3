import React from "react";
import HotelsPage from "pages/HotelsPage";
import Homepage from "pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/hotelspage" element={<HotelsPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
