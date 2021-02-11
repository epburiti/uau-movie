import React, { useEffect, useState } from "react";
import { RootState } from "./../../store/ducks/rootReducer";

import Header from "./../../components/Header/index";
import Cards from "./../../components/Cards/index";
import Loading from "./../../components/Loading/index";
import { useDispatch, useSelector } from "react-redux";
import api from "./../../services/api";
import * as MoviesActions from "./../../store/ducks/Movies/actions";

import { Container, ContainerButtonsPagination } from "./styles";

const Home = () => {
  const dispatch = useDispatch();

  const recomended = useSelector((state: RootState) => state.Movies.recomended);
  const dataMovies = useSelector((state: RootState) => state.Movies.data);
  const load = useSelector((state: RootState) => state.Movies.loading);
  const searchValueMovie = useSelector(
    (state: RootState) => state.Movies.searchValue
  );
  const [myPagiableButtons, setMyPagiableButtons] = useState<number[]>([]);
  useEffect(() => {
    setMyPagiableButtons([]);
    for (
      let index: number = dataMovies.page;
      index <= dataMovies.total_pages;
      index++
    ) {
      if (index > dataMovies.page + 4) break;

      setMyPagiableButtons((state: number[]) => [...state, index]);
    }
  }, [dataMovies]);

  return (
    <Container>
      {load && <Loading />}
      <Header />
      {!load && <Cards />}
      {!recomended && !load && (
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
