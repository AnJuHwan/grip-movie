import React, { useEffect } from 'react'
import { getMovieData } from 'services/movie'
import { IMovie } from 'types/movie'
import styles from './Home.module.scss'

const data: IMovie[] = [
  {
    Title: 'Iron Man 3',
    Year: '2013',
    imdbID: 'tt1300854',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Iron Man 3: Sky Movies Special',
    Year: '2013',
    imdbID: 'tt2909350',
    Type: 'movie',
    Poster: 'N/A',
  },
  {
    Title: 'Iron Man 3: The Official Game',
    Year: '2013',
    imdbID: 'tt4111326',
    Type: 'game',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTgyN2MzZDAtZjU0NS00Y2M0LTlmZjQtZWY1ZGVkOGUwNzMwXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Spy Kids',
    Year: '2001',
    imdbID: 'tt0227538',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Spy Who Loved Me',
    Year: '1977',
    imdbID: 'tt0076752',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDJhOTgyMTUtMDVhOS00MzRlLTk0MjYtYjI5NzhhMTExMTc1XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg',
  },
  {
    Title: 'The Spy Who Dumped Me',
    Year: '2018',
    imdbID: 'tt6663582',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDY1MTA0NjgyN15BMl5BanBnXkFtZTgwMTEzNDQ4NTM@._V1_SX300.jpg',
  },
  {
    Title: 'Spy Kids 2: Island of Lost Dreams',
    Year: '2002',
    imdbID: 'tt0287717',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNWM2N2JjYzYtYWIyNS00NDc3LWFkNDctMmYwOWQyZTcxYjZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'Spy Kids 3: Game Over',
    Year: '2003',
    imdbID: 'tt0338459',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTI4MTQyNTUzMF5BMl5BanBnXkFtZTcwNzE2MDAwMQ@@._V1_SX300.jpg',
  },
]

const Home = () => {
  return (
    <main className={styles.contents}>
      <ul>
        {data.map((movie) => {
          return (
            <div className={styles.movieTask} key={movie.imdbID}>
              <div className={styles.posterBox}>
                <img className={styles.poster} src={movie.Poster} alt='포스터가 없습니다.' />
              </div>
              <div className={styles.detailBox}>
                <p>제목: {movie.Title}</p>
                <p>연도: {movie.Year}</p>
                <p>타입: {movie.Type}</p>
              </div>
            </div>
          )
        })}
      </ul>
    </main>
  )
}

export default Home
