import "./App.css";
import Main from "./assests/components/Main";
import Navbar from "./assests/components/Navbar";
import Footer from "./assests/components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./assests/components/About";
import Contact from "./assests/components/Contact";
import GitaRemedies from "./assests/components/GitaRemedies";
import Shop from "./assests/components/Shop";
import VedicScriptures from "./assests/components/VedicScriptures";
import NoPage from "./assests/components/NoPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/GitaRemedies" element={<GitaRemedies />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/VedicScriptures" element={<VedicScriptures />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;
