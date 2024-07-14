import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchTrendingMovies } from "../../redux/slices/moviesSlice";
import { MovieListWrapper } from "./MovieList.styles";

const MovieList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.trending);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  return (
    <MovieListWrapper>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : null
            }
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
