import MovieItem from 'components/Movies/MovieItem'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { getMovieData } from 'services/movie'
import { movieInputState, movieState } from 'store/movie'
import styles from './Home.module.scss'

const Home = () => {
  const [movie, setMovie] = useRecoilState(movieState)
  const aRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(1)
  const inputValue = useRecoilValue(movieInputState)

  const getMovie = async (pageNum: number) => {
    const movies = await getMovieData({ s: inputValue, page: pageNum })
    if (movies.Search && String(movies.Response) !== 'False') {
      setMovie((prev) => [...prev, ...movies.Search])
    }
  }

  useEffect(() => {
    getMovie(page)
  }, [page])

  const moreMovie = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        moreMovie()
      }
    })
    if (aRef.current) {
      observer.observe(aRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <main className={styles.contents}>
      {movie.length === 0 ? (
        <div>검색결과가 없습니다.</div>
      ) : (
        <ul className={styles.taskBox}>
          {movie.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
        </ul>
      )}

      <div ref={aRef} />
    </main>
  )
}

export default Home
