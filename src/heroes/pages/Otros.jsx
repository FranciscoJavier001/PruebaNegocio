import React from "react";
import { HeroList } from "../components";

export const Otros = () => {
  return (
    <>
      <h1 className="text-center">Otros</h1>
      <hr />
      {/* Implemento el HL components/hero/HeroList, dentro de esta pagina mandando el publisher DC para retornar los Heroes de aqui */}
      <HeroList publisher="Otros" />
      {/* Esto estaba en la l6 de components/hero/HeroList aqui pongo que quiero mostrar */}
    </>
  );
};
