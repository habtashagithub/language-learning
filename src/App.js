import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import LanguagesCard from "./components/languages/LanguagesCard";
import Team from "./components/team/Team";
import Cultures from "./components/cultures/Cultures";
import MOU from "./components/mou/MOU";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Readmore from "./components/readmore/Readmore";
import Readmore1 from "./components/readmore/Readmore1";
import Readmore2 from "./components/readmore/Readmore2";
import Readmore3 from "./components/readmore/Readmore3";
import Readmore4 from "./components/readmore/Readmore4";
import Readmore5 from "./components/readmore/Readmore5";
import Readmore6 from "./components/readmore/Readmore6";
import Readmore7 from "./components/readmore/Readmore7";
import Readmore8 from "./components/readmore/Readmore8";
import Readmore9 from "./components/readmore/Readmore9";
import Readmore10 from "./components/readmore/Readmore10";
import Readmore11 from "./components/readmore/Readmore11";
import Readmore12 from "./components/readmore/Readmore12";
import Readmore13 from "./components/readmore/Readmore13";
import Readmore14 from "./components/readmore/Readmore14";
import Readmore15 from "./components/readmore/Readmore15";
import Readmore16 from "./components/readmore/Readmore16";
import Readmore17 from "./components/readmore/Readmore17";
import Readmore18 from "./components/readmore/Readmore18";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/languages" element={<LanguagesCard />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/cultures" element={<Cultures />} />
          <Route exact path="/mou" element={<MOU />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/readmore" element={<Readmore />} />
          <Route exact path="/readmore1" element={<Readmore1 />} />
          <Route exact path="/readmore2" element={<Readmore2 />} />
          <Route exact path="/readmore3" element={<Readmore3 />} />
          <Route exact path="/readmore4" element={<Readmore4 />} />
          <Route exact path="/readmore5" element={<Readmore5 />} />
          <Route exact path="/readmore6" element={<Readmore6 />} />
          <Route exact path="/readmore7" element={<Readmore7 />} />
          <Route exact path="/readmore8" element={<Readmore8 />} />
          <Route exact path="/readmore9" element={<Readmore9 />} />
          <Route exact path="/readmore10" element={<Readmore10 />} />
          <Route exact path="/readmore11" element={<Readmore11 />} />
          <Route exact path="/readmore12" element={<Readmore12 />} />
          <Route exact path="/readmore13" element={<Readmore13 />} />
          <Route exact path="/readmore14" element={<Readmore14 />} />
          <Route exact path="/readmore15" element={<Readmore15 />} />
          <Route exact path="/readmore16" element={<Readmore16 />} />
          <Route exact path="/readmore17" element={<Readmore17 />} />
          <Route exact path="/readmore18" element={<Readmore18 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
