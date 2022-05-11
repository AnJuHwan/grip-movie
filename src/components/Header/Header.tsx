import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { SearchIcon } from 'assets'
import { ChangeEvent, FormEvent } from 'react'
import { getMovieData } from 'services/movie'
import { movieInputState, movieState } from 'store/movie'
import { IMovie } from 'types/movie'
import styles from './Header.module.scss'

const Header = () => {
  const setMovieList = useSetRecoilState<[] | IMovie[]>(movieState)
  const [searchMovieTitle, setSearchMovieTitle] = useRecoilState<string>(movieInputState)
  const movieListResetState = useResetRecoilState(movieState)
  const inputResetState = useResetRecoilState(movieInputState)

  const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMovieTitle(e.currentTarget.value)
  }

  const searchClickHandler = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const movieListData = await getMovieData({
      s: searchMovieTitle,
      page: 1,
    })
    const movie: IMovie[] | [] = movieListData.Search

    // 나중에 바꿀것
    if (String(movieListData.Response) === 'False') {
      movieListResetState()
      return
    }

    setMovieList(movie)
    inputResetState()
  }

  return (
    <header className={styles.header}>
      <SearchIcon className={styles.icon} />

      <form>
        <input type='text' className={styles.input} onChange={searchChangeHandler} value={searchMovieTitle} />
        <button type='submit' className={styles.search} onClick={searchClickHandler}>
          검색
        </button>
      </form>
    </header>
  )
}

export default Header
