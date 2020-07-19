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

export class MovieDetail {
  constructor(
    public id: number,
    public vote: number,
    public title: string,
    public tagline: string,
    public runtime: string,
    public releaseDate: string,
    public genres: string,
    public stars: string,
    public backdropPath: string,
    public overview: string
  ) {}
}

export class APIResponse {
  constructor(
    public results: Movie[],
    public page?: number,
    public totalResults?: number,
    public totalPages?: number
  ) {}
}
