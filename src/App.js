import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ONas from "./pages/ONas";
import Oferta from "./pages/Oferta";
import Media from "./pages/Media";
import Kariera from "./pages/Kontakt";
import Galeria from "./pages/Galeria";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/O-Nas" element={<ONas />} exact />
          <Route path="/Oferta" element={<Oferta />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Kariera" element={<Kariera />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
