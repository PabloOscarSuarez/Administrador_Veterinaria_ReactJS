import React from "react";

function Header({ titulo }) {
  return (
    <header>
      <h1 className="text-center">{titulo} </h1>
    </header>
  );
}

export default Header;
