import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    // Esto lo vamos a poner ahora como un div y le vamos a poner una clase de bootstrap
    //** No quiere detectar las columnas de bootstrap, hay que analizar que pasa */
    //** Esto ultimo que le puse es una clase de animate.css, donde copie el cdn en el index y ya solo use lo que queria de estilo */
    //** animate.css es un cdn importada en index */
    //** card-columns=Para ver todo el Columnas, pero siempre deja 2 solos si no esta completo */
    //** animate__animated=Para asignar la animacion */
    //** animate__fadeIn=Efecto como desvanecido luego aparezcan */
    <div className="card-columns animate__animated animate__fadeIn">
      {
        //** Esta es la expresion para barrer osea usar el map */
        heroes.map(
          (
            hero //** Barro el arreglo de los heroes con una funcion hero que retorna un objeto en el HC l25 */
          ) => (
            <HeroCard //** Importado desde components/>heroes/HeroCard, y es para poder renderizar la tareta de los heroes */
              key={hero.id} //** Key es para acceder a un atributo de HC "id" de la constante exportada en l5 components/heroes/HeroCard */
              {...hero} //** Operador spred para mostrar la info de las propiedades de cada heroe */
            />
          )
        )
      }
    </div>
  );
};
