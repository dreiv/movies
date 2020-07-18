function toMovie(movie: any): Movie {
  return new Movie(
    movie.popularity,
    movie.id,
    movie.video,
    movie.vote_count,
    movie.vote_average,
    movie.title,
    movie.release_date,
    movie.original_language,
    movie.original_title,
    movie.genre_ids,
    movie.backdrop_path,
    movie.adult,
    movie.overview,
    movie.poster_path
  );
}

export function toAPIResponse(response: any): APIResponse {
  return new APIResponse(
    response.page,
    response.totalResults,
    response.totalPages,
    response.results.map(toMovie)
  );
}

export class Movie {
  constructor(
    public popularity: number,
    public id: number,
    public video: boolean,
    public voteCount: number,
    public voteAverage: number,
    public title: string,
    public releaseDate: string,
    public originalLanguage: string,
    public originalTitle: string,
    public genreIds: number[],
    public backdropPath: string,
    public adult: boolean,
    public overview: string,
    public posterPath: string
  ) {}
}

export class APIResponse {
  constructor(
    public page: number,
    public totalResults: number,
    public totalPages: number,
    public results: Movie[]
  ) {}
}
