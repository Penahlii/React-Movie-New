import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchMovieReviews } from "../../redux/slices/movieDetailsSlice";
import { ReviewsWrapper } from "./MovieReviews.styles";

interface MovieReviewsProps {
  movieId: string;
}

const MovieReviews: React.FC<MovieReviewsProps> = ({ movieId }) => {
  const dispatch: AppDispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.movieDetails.reviews);

  useEffect(() => {
    dispatch(fetchMovieReviews(movieId));
  }, [dispatch, movieId]);

  return (
    <ReviewsWrapper>
      {reviews.map((review) => (
        <div key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </div>
      ))}
    </ReviewsWrapper>
  );
};

export default MovieReviews;
