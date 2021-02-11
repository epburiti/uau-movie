import React, { useEffect, useState } from "react";
import { RootState } from "./../../store/ducks/rootReducer";

import Header from "./../../components/Header/index";
import { useDispatch, useSelector } from "react-redux";
import api from "./../../services/api";
import * as MoviesActions from "./../../store/ducks/Movies/actions";
import NotFound from "./../../assets/404.png";

import {
  Container,
  ContainerCards,
  ContainerButtonsPagination,
} from "./styles";

const Home = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.Movies.data.results);
  const recomended = useSelector((state: RootState) => state.Movies.recomended);
  const dataMovies = useSelector((state: RootState) => state.Movies.data);
  const searchValueMovie = useSelector(
    (state: RootState) => state.Movies.searchValue
  );
  const [genre, setGenre] = useState(Object);
  const [myPagiableButtons, setMyPagiableButtons] = useState<any>([]);
  useEffect(() => {
    setMyPagiableButtons([]);
    for (
      let index = dataMovies.page;
      index <= dataMovies.total_pages;
      index++
    ) {
      if (index > dataMovies.page + 4) break;

      setMyPagiableButtons((state: any) => [...state, index]);
    }
  }, [dataMovies]);
  useEffect(() => {
    getGenre();
  }, []);
  useEffect(() => {
    console.log("search=-=-=- ", dataMovies);
  }, [dataMovies]);

  async function getGenre() {
    const response = await api.get("/genre/movie/list");
    var object = response.data.genres.reduce(
      (obj: any, item: any) => ((obj[item.id] = item.name), obj),
      {}
    );
    setGenre(object);
  }
  async function handleVideo(id: number) {
    const { data: response } = await api.get(`/movie/${id}/videos`);
    const { key } =
      response.results.length === 0 ? { key: undefined } : response.results[0];
    console.log(key);
  }
  return (
    <Container>
      <Header />
      <ContainerCards>
        {movies.map((item: any) => (
          <div
            className="card"
            onClick={() => {
              handleVideo(item.id);
            }}
          >
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
                {item.genre_ids.map((myItem: any, index: number) => (
                  <p key={index}>{genre[myItem]}, </p>
                ))}
              </div>
              <div className="card-date">
                Data de estreia:{" "}
                {new Date(item.release_date).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </ContainerCards>

      {!recomended && (
        <ContainerButtonsPagination>
          <div className="container">
            {dataMovies.page !== 1 && (
              <button
                onClick={() => {
                  dispatch(
                    MoviesActions.searchRequest(
                      searchValueMovie,
                      dataMovies.page - 1
                    )
                  );
                }}
              >
                Anterior
              </button>
            )}
            {myPagiableButtons.map((item: number, index: number) => (
              <button
                key={index}
                className={dataMovies.page === item ? "active" : ""}
                onClick={() => {
                  dispatch(MoviesActions.searchRequest(searchValueMovie, item));
                }}
              >
                {item}
              </button>
            ))}
            {dataMovies.total_pages != dataMovies.page && (
              <button
                onClick={() => {
                  dispatch(
                    MoviesActions.searchRequest(
                      searchValueMovie,
                      dataMovies.page + 1
                    )
                  );
                }}
              >
                Próximo
              </button>
            )}
          </div>
        </ContainerButtonsPagination>
      )}
    </Container>
  );
};

export default Home;
