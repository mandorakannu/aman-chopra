import "./App.css";
import Main from "./assests/components/Main";
import Navbar from "./assests/components/Navbar";
import Footer from "./assests/components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./assests/components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About/>} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
