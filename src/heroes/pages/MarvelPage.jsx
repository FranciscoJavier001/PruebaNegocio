import React from "react";
import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <div>
      <h1 className="text-center">Verduras</h1>
      <hr />
      {/* Implemento el HL components/hero/HeroList, dentro de esta pagina mandando el publisher Marvel para retornar los Heroes de aqui */}
      <HeroList publisher="Marvel Comics" />{" "}
      {/* Esto estaba en la l6 de components/hero/HeroList aqui pongo que quiero mostrar */}
    </div>
  );
};
