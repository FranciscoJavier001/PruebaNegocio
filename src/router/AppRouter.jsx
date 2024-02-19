import React from "react";
import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Rutas privadas */}
        <Route path="/*" element={<HeroesRoutes />}></Route>
        {/* <Route path="login" element={<LoginPage />} /> */}
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
