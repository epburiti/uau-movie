import React, { useEffect } from "react";
import { RootState } from "./../../store/ducks/rootReducer";

import { Container, ContainerCards } from "./styles";
import Header from "./../../components/Header/index";
import { useSelector } from "react-redux";

const Home = () => {
  const movies = useSelector((state: RootState) => state.Movies.data.results);
  useEffect(() => {
    console.log(movies);
  }, [movies]);
  return (
    <Container>
      <Header />
      <ContainerCards>
        {movies.map((item: any) => (
          <div className="card">
            {/* <h1>{item.title}</h1> */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
            />

            <div className="infos">
              <span>{item.original_title}</span>
              <div className="card-type">
                Animação, Ação, Aventura, Crime, Fantasia
              </div>
              <div className="card-date">
                Data de estreia:{" "}
                {new Date(item.release_date).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default Home;
