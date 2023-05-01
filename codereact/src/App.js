import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageAccueil from "./Pages/PageAccueil/Index";
import PageConnexion from "./Pages/PageConnexion/Index";
import PageMenu from "./Pages/PageMenu/Index";
import PagePanier from "./Pages/PagePanier/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageAccueil />} />
        <Route exact path="/Connexion" element={<PageConnexion />} />
        <Route exact path="/Menu" element={<PageMenu />} />
        <Route exact path="/Connecter" element={<PagePanier />} />
      </Routes>
    </div>
  );
}

export default App;
