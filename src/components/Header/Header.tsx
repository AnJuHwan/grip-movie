import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { SearchIcon } from 'assets'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getMovieData } from 'services/movie'
import { movieState } from 'store/movie'
import { IMovie } from 'types/movie'
import styles from './Header.module.scss'

const Header = () => {
  const setMovieList = useSetRecoilState<[] | IMovie[]>(movieState)
  const resetState = useResetRecoilState(movieState)
  const [searchMovieTitle, setSearchMovieTitle] = useState<string>('')

  

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
      resetState()
      return
    }

    setMovieList(movie)
  }

  return (
    <header className={styles.header}>
      <SearchIcon className={styles.icon} />

      <form>
        <input type='text' className={styles.input} onChange={searchChangeHandler} />
        <button type='submit' className={styles.search} onClick={searchClickHandler}>
          검색
        </button>
      </form>
    </header>
  )
}

export default Header
