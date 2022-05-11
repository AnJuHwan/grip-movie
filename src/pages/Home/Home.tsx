import Modal from 'components/Modal/Modal'
import MovieItem from 'components/Movies/MovieItem'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { movieState } from 'store/movie'
import styles from './Home.module.scss'

const Home = () => {
  const movie = useRecoilValue(movieState)

  return (
    <main className={styles.contents}>
      {movie.length === 0 ? (
        <div>검색결과가 없습니다.</div>
      ) : (
        <ul>
          {movie.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
        </ul>
      )}
    </main>
  )
}

export default Home
