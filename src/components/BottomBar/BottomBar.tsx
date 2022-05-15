import { FormEvent, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { useRecoilState } from 'recoil'
import { currentLocationPage } from 'store/movie'
import { SearchIcon, StarIcon } from 'assets'
import styles from './BottomBar.module.scss'

const BottomBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [currentPage, setCurrentPage] = useRecoilState<string>(currentLocationPage)

  const tabClickHandler = (e: FormEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    setCurrentPage(name)
    navigate(name)
    // if (currentPage === '/favorite') {
    //   window.location.reload()
    // }
  }

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname, setCurrentPage])

  return (
    <footer className={styles.bottomBar}>
      <button
        type='button'
        name='/'
        className={cx(styles.tab, { [styles.active]: currentPage === '/' })}
        onClick={tabClickHandler}
      >
        <SearchIcon className={styles.icon} />
        <span>검색하기</span>
      </button>

      <button
        type='button'
        name='/favorite'
        className={cx(styles.tab, { [styles.active]: currentPage === '/favorite' })}
        onClick={tabClickHandler}
      >
        <StarIcon className={styles.icon} />
        <span>즐겨찾기</span>
      </button>
    </footer>
  )
}

export default BottomBar
