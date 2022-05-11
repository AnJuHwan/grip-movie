import MovieItem from 'components/Movies/MovieItem'
import { useCallback, useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { moviePageState, movieState } from 'store/movie'
import styles from './Home.module.scss'

const Home = () => {
  const movie = useRecoilValue(movieState)
  const targetRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useRecoilState(moviePageState)

  // console.log(targetRef)

  const intersection = useCallback(() => {
    const options = {
      root: targetRef.current,
      threshold: 1,
    }
    const observers = new IntersectionObserver((entries, observer) => {
      console.log(entries, observer)
      setPage((prev) => prev + 1)
    }, options)

    // console.log(targetRef.current)
    // console.log(observer)

    if (targetRef.current) {
      observers.observe(targetRef.current)
    }
  }, [setPage])

  useEffect(() => {
    intersection()
  }, [intersection])

  return (
    <main className={styles.contents}>
      {movie.length === 0 ? (
        <div>검색결과가 없습니다.</div>
      ) : (
        <ul className={styles.taskBox}>
          {movie.map((item) => (
            <MovieItem key={item.imdbID} item={item} />
          ))}
          <div ref={targetRef}>11</div>
        </ul>
      )}
    </main>
  )
}

export default Home
