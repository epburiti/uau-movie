import React, { useState, useEffect } from "react";

import Logo from "./../../assets/logo.png";

import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

import { useDispatch } from "react-redux";
import * as MoviesActions from "./../../store/ducks/Movies/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(MoviesActions.loadRecomendedsRequest());
  }, []);
  return (
    <Container>
      <div>
        <img src={Logo} alt="Uau box logo" />
      </div>
      <h1> Uau Filmes - Listagem de Filmes</h1>
      <div className="searchItems">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Pesquise por Título..."
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <AiOutlineSearch color={"white"} size={28} className="icone" />
        </div>

        <div className="button-custom">
          <button
            onClick={() => {
              if (searchValue.trim() == "") {
                dispatch(MoviesActions.loadRecomendedsRequest());
              } else {
                dispatch(MoviesActions.searchRequest(searchValue, 1));
              }
            }}
          >
            Pesquisar
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
