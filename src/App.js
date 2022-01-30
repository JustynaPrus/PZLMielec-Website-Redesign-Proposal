import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ONas from "./pages/ONas";
import Oferta from "./pages/Oferta";
import Media from "./pages/Media";
import Kariera from "./pages/Kariera";
import Galeria from "./pages/Galeria";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/"
            element={<ONas />}
            exact
          />
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/Oferta"
            element={<Oferta />}
          />
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/Media"
            element={<Media />}
          />
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/Kariera"
            element={<Kariera />}
          />
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/Galeria"
            element={<Galeria />}
          />
          <Route
            path="/PZLMielec-Website-Redesign-Proposal/Kontakt"
            element={<Kontakt />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
