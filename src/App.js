import "./App.scss";
import CharactersPage from "./components/characters-page/CharactersPage";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import EpisodesPage from "./components/episodes/EpisodesPage";
import Navbar from "./components/navbar/Navbar";
import CardDetails from "./components/card-details/CardDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path=":charId" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
