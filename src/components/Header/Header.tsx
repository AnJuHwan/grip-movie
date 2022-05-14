import { SearchIcon } from 'assets'
import { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { getMovieData } from 'services/movie'
import { currentLocationPage, movieInputState, moviePageState, movieState } from 'store/movie'
import styles from './Header.module.scss'

const Header = () => {
  const setMovies = useSetRecoilState(movieState) // 검색한 영화 리스트 저장
  const setPage = useSetRecoilState(moviePageState) // 현재 페이지 저장
  const setLocation = useSetRecoilState(currentLocationPage)

  const [movieInputValue, setMovieInputValue] = useRecoilState<string>(movieInputState)

  const navigate = useNavigate()

  const searchClickHandler = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPage(1) // 검색했을 시 페이지 초기화
    const moviesData = await getMovieData({ s: movieInputValue, page: 1 })
    if (String(moviesData.Response) === 'True' && moviesData.Search) {
      navigate('/')
      setLocation('/')
      setMovies(moviesData.Search)
      return
    }
    setMovies([])
  }

  const inputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMovieInputValue(e.currentTarget.value)
  }

  return (
    <header className={styles.header}>
      <SearchIcon className={styles.icon} />

      <form>
        <input type='text' className={styles.input} onChange={inputValueChange} />
        <button type='submit' className={styles.search} onClick={searchClickHandler}>
          검색
        </button>
      </form>
    </header>
  )
}

export default Header
