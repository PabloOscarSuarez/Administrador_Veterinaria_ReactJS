import React from "react";
import PropTypes from "prop-types";

function Header({ titulo }) {
  return (
    <header>
      <h1 className="text-center">{titulo} </h1>
    </header>
  );
}

// forma de documentar mi aplicacion y mostrar que le llega por props
Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
