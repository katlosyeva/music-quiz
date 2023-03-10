import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/Layout";
// import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element={<WelcomePage />} /> */}
      <Route index element={<GamePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
