//**_______________________________________________________________________________________________________________________________________________*/
//** Esto es un Navbar - Lo copie del Git */
import React from "react";
import { Link, NavLink } from "react-router-dom";

//  export const Navbar = ({ history }) => { //** Aqui en pego el history, no compartir mucha informacion por los props */
export const Navbar = () => {
  //** Es la linea 8, pero remplazo la sintaxis */

  return (
    //** navbar=Para que todo este junto y no haya espacios */
    //** navbar-dark=letras en color gris */
    //** bg-dark=fondo en negro */
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <Link
        className="navbar-brand" //** Es para que salga al inicio y mas grande */
        to="/search" //** Donde me lleva cuando hago click */
      >
        Negocio {/* Texto */}
      </Link>

      <div className="navbar-nav">
        {" "}
        {/* Hacer mas chico la anchura */}
        <div className="navbar-nav">
          {/* Para que todas esten en hileras */}

          <NavLink
            activeClassName="active" //** Dond este seleccionado se quede en color blanco */
            className="nav-item nav-link" //** nav-item=Item de navegacion - nav-link= es para que todos se vean a la altura */
            exact //** Es la direccion a la que lleva */
            to="/marvel">
            Verduras
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc">
            Frutas
          </NavLink>

          <NavLink //** Ruta que me lleva al Search en el NavBar */
            activeClassName="active" //** Para que se quede blanco cuando este ahi */
            className="nav-item nav-link"
            exact
            to="/search">
            Busqueda
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
