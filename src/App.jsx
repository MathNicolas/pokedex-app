import React from 'react';
import AllPokemons from "./pages/AllPokemons"
import Index from "./pages/Index"
import PokemonDetails from "./pages/PokemonDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/all", 
      element: <AllPokemons /> 
    },
    {
      path: "/", 
      element: <Index /> 
    },
    {
      path: "/pokemon/:name",
      element: <PokemonDetails />
    }
  ]);

  return (
    <RouterProvider router={router} /> 
  );
}

export default App;