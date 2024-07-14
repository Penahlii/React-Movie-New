import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchMoviesBySearch } from "../../redux/slices/moviesSlice";
import { MoviesPageWrapper, SearchForm } from "./MoviesPage.styles";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [query, setQuery] = useState("");
  const movies = useSelector((state: RootState) => state.movies.searchResults);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchMoviesBySearch(query));
    }
  };

  return (
    <MoviesPageWrapper>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </SearchForm>
      <MovieList movies={movies} />
    </MoviesPageWrapper>
  );
};

export default MoviesPage;
