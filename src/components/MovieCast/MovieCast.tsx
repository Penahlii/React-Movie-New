import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchMovieCredits } from "../../redux/slices/movieDetailsSlice";
import { CastListWrapper } from "./MovieCast.styles";

interface MovieCastProps {
  movieId: string;
}

const MovieCast: React.FC<MovieCastProps> = ({ movieId }) => {
  const dispatch: AppDispatch = useDispatch();
  const cast = useSelector((state: RootState) => state.movieDetails.cast);

  useEffect(() => {
    dispatch(fetchMovieCredits(movieId));
  }, [dispatch, movieId]);

  return (
    <CastListWrapper>
      {cast.map((member) => (
        <div key={member.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
            alt={member.name}
          />
          <h4>{member.name}</h4>
          <p>{member.character}</p>
        </div>
      ))}
    </CastListWrapper>
  );
};

export default MovieCast;
