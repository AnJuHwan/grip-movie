import { SearchIcon } from 'assets'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { getMovieData } from 'services/movie'
import { movieInputState, moviePageState, movieState } from 'store/movie'
import styles from './Header.module.scss'

const Header = () => {
  const [movies, setMovies] = useRecoilState(movieState)
  const [page, setPage] = useRecoilState(moviePageState)
  const [movieInputValue, setMovieInputValue] = useRecoilState<string>(movieInputState)

  const searchClickHandler = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setPage(1)
    const moviesData = await getMovieData({ s: movieInputValue, page: 1 })
    if (String(moviesData.Response) === 'True' && moviesData.Search) {
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
