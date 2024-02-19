import React from "react";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `https://raw.githubusercontent.com/FranciscoJavier001/PruebaNegocio/gh-pages/heroes/${id}.jpg`;

  return (
    <div className="card ms-3" style={{ maxWidth: 500 }}>
      {" "}
      {/* card=Que se muestren tarjetas, style, es la anchura maxima de las tarjetas */}
      <div className="row no-gutters">
        {" "}
        {/* row=Que salgan en columnas(la info alado) no-gutters=Imagenes ocupen todo el largo de la tarjeta */}
        <div className="col-md-6">
          {" "}
          {/* col=Columnas que ocupa la tarjeta 4 de 12 */}
          <img //** Para mostrar las imagenes */
            src={heroImageUrl} //** Donde se Localizan para añadirlos */
            className="card-img" //** Para que ocupe todo el largo la imagen */
            alt={superhero}
            style={{ minHeight: 150, maxHeight: 150 }} //** Para el nombre del superheroe */
          />
        </div>
        <div className="text-center col-md-6">
          {" "}
          {/* Espacio que ocupa la info, ya ocupe 4, solo quedan 8 */}
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>{" "}
            {/* h5=Encabeado 5(tamaño), card-title=Para poner el nombre del superheroe */}
            <p className="card-text">{alter_ego}</p>{" "}
            {/* p=parrafo, card-text=Texto del nombre del superheroe */}
            {
              /* { ( alter_ego !== characters ) //** alter_ego(nombre en la vida real) es diferente caracter(nombre de sus personajes) */
              // && <p className="card-text">{ characters }</p> //** && renderiza otro p, p=parrafo, card-text=Mostramos el nombre de sus personajes */
            }
            <p className="card-text">
              {" "}
              {/* card-text=Texto en la tarjeta */}
              <small className="text-muted"> {first_appearance} </small>{" "}
              {/* small=texto chico, text-muted=texto en gris, historieta que aparecio */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
