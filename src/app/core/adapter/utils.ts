import { Movie } from '@core/api.model';

export function toMovie(item: any): Movie {
  return new Movie(
    item.popularity,
    item.id,
    item.video,
    item.vote_count,
    item.vote_average,
    item.title,
    item.release_date,
    item.original_language,
    item.original_title,
    item.genre_ids,
    item.backdrop_path,
    item.adult,
    item.overview,
    item.poster_path
  );
}
