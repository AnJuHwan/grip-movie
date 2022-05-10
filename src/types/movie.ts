export interface IMovies {
  Search: IMovie[]
  totalResults: number
  Response: boolean
}

export interface IMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
