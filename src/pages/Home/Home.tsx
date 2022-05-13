import { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { movieInputState, moviePageState, movieState } from 'store/movie'
import MovieItem from 'components/Movies/MovieItem'
import styles from './Home.module.scss'
import { getMovieData } from 'services/movie'
import Modal from 'components/Modal/Modal'
import { IMovie } from 'types/movie'

const Home = () => {
  const [movie, setMovie] = useRecoilState(movieState) // 검색을 눌렀을 때 영화 리스트
  const inputValue = useRecoilValue(movieInputState)
  const [page, setPage] = useRecoilState(moviePageState) // 현재 페이지

  const targetRef = useRef<HTMLDivElement>(null)

  const [favoriteModal, setFavoriteModal] = useState<boolean>(false)
  const [clickId, setClickId] = useState<string>('') // 클릭한 아이템 아이디

  const movieDetail = movie.filter((item) => item.imdbID === clickId) // 모달의 보여줄 아이템의 정보

  const localFavorite = localStorage.getItem('movies')
  const localFavoritemList: IMovie[] | [] = localFavorite ? JSON.parse(localFavorite) : []
  const isFavorite = localFavoritemList.findIndex((movieItem: IMovie) => movieItem.imdbID === clickId) // 즐겨찾기 아이템 인덱스

  const closeModalHandler = () => {
    setFavoriteModal(false)
  }

  const openModalHandler = () => {
    setFavoriteModal(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1)
      }
    })
    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => observer.disconnect()
  }, [movie, setPage])

  useEffect(() => {
    const getMovies = async () => {
      if (page > 1) {
        const movies = await getMovieData({ s: inputValue, page })
        if (String(movies.Response) === 'True' && movies.Search) {
          setMovie([...movie, ...movies.Search])
        }
      }
    }
    getMovies()
  }, [page])

  return (
    <main className={styles.contents}>
      {movie.length === 0 ? (
        <div>검색결과가 없습니다.</div>
      ) : (
        <ul className={styles.taskBox}>
          {movie.map((item) => (
            <MovieItem
              key={item.imdbID}
              item={item}
              setClickId={setClickId}
              openModal={openModalHandler}
              localFavoritemList={localFavoritemList}
            />
          ))}
        </ul>
      )}
      {movie.length !== 0 && <div ref={targetRef} />}
      <Modal item={movieDetail[0]} close={closeModalHandler} show={favoriteModal} isFavorite={isFavorite} />
    </main>
  )
}

export default Home
