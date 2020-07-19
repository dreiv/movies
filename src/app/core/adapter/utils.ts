import { Movie, MovieDetail } from '@core/api.model';

export function movieDetailToMovie(details: MovieDetail): Movie {
  return new Movie(
    details.id,
    details.vote,
    details.title,
    details.overview,
    details.posterPath
  );
}
