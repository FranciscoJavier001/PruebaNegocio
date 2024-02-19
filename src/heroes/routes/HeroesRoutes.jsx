import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage } from "../pages";
import { Navbar } from "../../ui/components";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />

          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
