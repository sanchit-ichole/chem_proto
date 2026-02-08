import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navigation from "@/react-app/components/Navigation";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import ChemicalsPage from "@/react-app/pages/Chemicals";
import ProcessPage from "@/react-app/pages/Process";
import ExperimentPage from "@/react-app/pages/Experiment";
import VideoPage from "@/react-app/pages/Video";
import ComparisonPage from "@/react-app/pages/Comparison";
import TeamPage from "@/react-app/pages/Team";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chemicals" element={<ChemicalsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/experiment" element={<ExperimentPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}
