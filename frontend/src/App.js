import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CatchPokemonPage from "./pages/CatchPokemonPage";
import AllPokemonPage from "./pages/AllPokemonPage";
import UserPokemonPage from "./pages/UserPokemonPage";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
