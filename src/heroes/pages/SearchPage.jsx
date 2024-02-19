import { HeroCard } from "../components/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className="text-center">Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5 text-center">
          <h4>Formulario</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Producto"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn mt-1 btn-block btn-outline-primary">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <h4 className="text-center">Resultado</h4>
          <hr />

          <div
            className="alert alert-primary animate__animated animate__fadeIn text-center"
            style={{ display: showSearch ? "" : "none" }}>
            Resultados Busqueda
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn text-center"
            style={{ display: showError ? "" : "none" }}>
            Sin Resultados <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {/*  */}
        </div>
      </div>
    </>
  );
};
