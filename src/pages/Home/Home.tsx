import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { movieInputState, moviePageState, movieState } from 'store/movie'
import MovieItem from 'components/Movies/MovieItem'
import styles from './Home.module.scss'
import { getMovieData } from 'services/movie'

const Home = () => {
  const [movie, setMovie] = useRecoilState(movieState)
  const inputValue = useRecoilValue(movieInputState)
  const [page, setPage] = useRecoilState(moviePageState)
  const targetRef = useRef<HTMLDivElement>(null)

  

  useEffect(() => {
    if (!targetRef.current) return
    const observer = new IntersectionObserver(async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        // if (page <= 1) {
        //   return
        // }
        setPage((prev) => prev + 1)
      }
    })
    observer.observe(targetRef.current)

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect()
  }, [movie])

  useEffect(() => {
    const apiCall = async () => {
      if (page > 1) {
        const movies = await getMovieData({ s: inputValue, page })
        if (String(movies.Response) === 'True' && movies.Search) {
          setMovie([...movie, ...movies.Search])
        }
      }
    }
    apiCall()
  }, [page])

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
      {movie.length !== 0 && <div ref={targetRef}>aa</div>}
    </main>
  )
}

export default Home
