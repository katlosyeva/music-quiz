import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { createContext } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/Layout";
import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
// import ResultsPage from "./pages/ResultsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="/game" element={<GamePage />} />
      {/* <Route index element={<ResultsPage />} /> */}
    </Route>
  )
);
export interface iPlayerContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const PlayerContext = createContext<iPlayerContext>({
  name: "",
  setName: () => {},
});
function App() {
  const [name, setName] = useState<string>("");

  return (
    <PlayerContext.Provider value={{ name, setName }}>
      <RouterProvider router={router} />
    </PlayerContext.Provider>
  );
}

export default App;
