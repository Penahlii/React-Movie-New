import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
} from "../../redux/slices/movieDetailsSlice";
import { MovieDetailsWrapper } from "./MovieDetailsPage.styles";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import Loader from "../../components/common/Loader";

const MovieDetailsPage: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { details, status } = useSelector(
    (state: RootState) => state.movieDetails
  );

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId));
      dispatch(fetchMovieCredits(movieId));
      dispatch(fetchMovieReviews(movieId));
    }
  }, [dispatch, movieId]);

  if (status === "loading" || !details) {
    return <Loader />;
  }

  return (
    <MovieDetailsWrapper>
      <h1>{details.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        alt={details.title}
      />
      <p>{details.overview}</p>
      <MovieCast movieId={movieId} />
      <MovieReviews movieId={movieId} />
    </MovieDetailsWrapper>
  );
};

export default MovieDetailsPage;
