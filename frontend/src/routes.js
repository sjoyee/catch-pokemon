import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CatchPokemonPage from "./pages/CatchPokemonPage";
import AllPokemonPage from "./pages/AllPokemonPage";
import UserPokemonPage from "./pages/UserPokemonPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import { useEffect } from "react";

const Router = () => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/create" &&
      !loggedInUser
    ) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate
            to={JSON.parse(localStorage.getItem("user")) ? "/catch" : "/login"}
            replace
          />
        }
      ></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create" element={<CreateAccountPage />} />
      <Route path="/catch" element={<CatchPokemonPage />} />
      <Route path="/all" element={<AllPokemonPage />} />
      <Route path="/mypokemon" element={<UserPokemonPage />} />
    </Routes>
  );
};

export default Router;
