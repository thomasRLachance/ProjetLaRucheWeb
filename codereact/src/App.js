import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageAccueil from "./PageAccueil/Index";
import PageConnexion from "./PageConnexion/Index";
import PageMenu from "./PageMenu/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PageAccueil />} />
        <Route exact path="/Connexion" element={<PageConnexion />} />
        <Route exact path="/Menu" element={<PageMenu />} />
      </Routes>
    </div>
  );
}

export default App;
