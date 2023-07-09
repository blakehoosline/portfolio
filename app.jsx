import Home from "./pages/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<resume />} />
      </Routes>
    </Router>
  );
};
