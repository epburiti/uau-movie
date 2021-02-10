import React, { useState, useEffect } from "react";

import Logo from "./../../assets/logo.svg";

import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import api from "./../../services/api";

import { useDispatch } from "react-redux";
import * as MoviesActions from "./../../store/ducks/Movies/actions";

interface options {
  id: number;
  name: string;
}

const Header = () => {
  const dispatch = useDispatch();
  const [selectGenre, setSelectGenre] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [optionsGenre, setOptionsGenre] = useState([]);

  useEffect(() => {
    getGenre();
  }, []);
  async function getGenre() {
    const response = await api.get("/genre/movie/list");
    setOptionsGenre(response.data.genres);
    console.log(response.data.genres);
  }
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
          <AiOutlineSearch color={"black"} size={28} className="icone" />
        </div>
        <div className="selects">
          <div className="selectContainer custom-select">
            <select
              name="genre"
              id="genre"
              value={selectGenre}
              onChange={(event) => {
                setSelectGenre(event.target.value);
              }}
            >
              <option value="" className="options" disabled>
                Género
              </option>
              {optionsGenre.map((item: options, index: number) => (
                <option value={item.id} className="options" key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="button-custom">
          <button
            onClick={() => {
              dispatch(MoviesActions.searchRequest(searchValue));
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
