import React, { useEffect, useState } from "react";
import api from "./../../services/api";

import { ContainerCards } from "./styles";
import NotFound from "./../../assets/404.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../../store/ducks/rootReducer";
import { Movie } from "./../../store/ducks/Movies/types";
const Cards = () => {
  const movies = useSelector((state: RootState) => state.Movies.data.results);
  const [genre, setGenre] = useState(Object);

  useEffect(() => {
    getGenre();
  }, []);
  async function getGenre() {
    const response = await api.get("/genre/movie/list?");
    var object = response.data.genres.reduce(
      (obj: any, item: any) => ((obj[item.id] = item.name), obj),
      {}
    );
    setGenre(object);
  }
  return (
    <ContainerCards>
      {movies.map((item: Movie, index: number) => (
        <div className="card" key={index}>
          <img
            src={
              item.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : NotFound
            }
            alt={item.original_title}
          />

          <div className="infos">
            <span>{item.original_title}</span>
            <div className="card-type">
              {item.genre_ids.map((myItem: number, index: number) => (
                <p key={index}>{genre[myItem]}, </p>
              ))}
            </div>
            <div className="card-date">
              Data de estreia:{" "}
              {new Date(item.release_date).toLocaleDateString()}
            </div>
          </div>
          <div className="note">
            <button>{item.vote_average}</button>
          </div>
        </div>
      ))}

      {!movies.length && <h1>NENHUM FILME ENCONTRADO, TENTE OUTRO FILTRO</h1>}
    </ContainerCards>
  );
};

export default Cards;
