import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageAccueil from "./Pages/PageAccueil/Index";
import PageConnexion from "./Pages/PageConnexion/Index";
import PageMenu from "./Pages/PageMenu/Index";
import PagePanier from "./Pages/PagePanier/Index";
import PageCalendrier from "./Pages/PageCalendrier/Index";
import ErrorPage from "./Utils/ErrorPage/Index";
import PageProfil from "./Pages/PageProfil/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageAccueil />} />
        <Route exact path="/Connexion" element={<PageConnexion />} />
        <Route exact path="/Menu" element={<PageMenu />} />
        <Route exact path="/Connecter" element={<PagePanier />} />
        <Route exact path="/Calendrier" element={<PageCalendrier />} />
        <Route exact path="/Erreur" element={<ErrorPage />} />
        <Route exact path="/Profil" element={<PageProfil />} />
      </Routes>
    </div>
  );
}

export default App;
