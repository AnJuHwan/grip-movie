import { SearchIcon } from 'assets'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { getMovieData } from 'services/movie'
import { IMovie } from 'types/movie'
import styles from './Header.module.scss'

const Header = () => {
  const [movieList, setMovieList] = useState<IMovie | []>([])
  const [searchMovieTitle, setSearchMovieTitle] = useState<string>('')

  const movieData = useCallback(async () => {
    const params = {
      s: searchMovieTitle,
      page: 1,
    }
    const movieListData = await getMovieData(params)
    console.log(movieListData)
  }, [searchMovieTitle])

  useEffect(() => {
    movieData()
  }, [movieData])

  const searchChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    
  }

  return (
    <header className={styles.header}>
      <SearchIcon className={styles.icon} />

      <input type='text' className={styles.input} />
      <button type='submit' className={styles.search}>
        검색
      </button>
    </header>
  )
}

export default Header
