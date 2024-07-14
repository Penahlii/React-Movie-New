import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import { HomePageWrapper } from "./HomePage.styles";

const HomePage: React.FC = () => {
  return (
    <HomePageWrapper>
      <h1>Trending Movies</h1>
      <MovieList />
    </HomePageWrapper>
  );
};

export default HomePage;
