import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Navigation.styles";

const Navigation: React.FC = () => {
  return (
    <Nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </Nav>
  );
};

export default Navigation;
