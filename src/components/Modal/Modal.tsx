import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSetRecoilState } from 'recoil'
import { movieFavoriteState } from 'store/movie'
import { IMovie } from 'types/movie'
import styles from './Modal.module.scss'

interface IProps {
  show: boolean
  close: () => void
  item: IMovie
  isFavorite: number
}

const Modal: React.FC<IProps> = ({ show, close, item, isFavorite }) => {
  const element = document.getElementById('modal') as HTMLElement
  const localFavorite = localStorage.getItem('movies')
  const localFavoritemList: IMovie[] | [] = localFavorite ? JSON.parse(localFavorite) : []
  const setFavoriteList = useSetRecoilState(movieFavoriteState)

  let favoriteList: IMovie[] = []
  favoriteList = localFavoritemList

  useEffect(() => {
    setFavoriteList(favoriteList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFavoriteList])

  const favoriteSetMovie = (movie: IMovie) => {
    favoriteList.push(movie)
    localStorage.setItem('movies', JSON.stringify(favoriteList))

    close()
  }

  const favoriteRemoveMovie = () => {
    if (isFavorite > -1) {
      const filter = favoriteList.filter((movie) => movie.imdbID !== item.imdbID)
      localStorage.setItem('movies', JSON.stringify(filter))
      setFavoriteList(filter)
    }
    close()
  }

  return ReactDOM.createPortal(
    <div>
      {show && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <div className={styles.detailBox}>
              <p>제목: {item.Title}</p>
              <p>연도: {item.Year}</p>
              <p>타입: {item.Type}</p>
            </div>
            <div className={styles.selectContainer}>
              <button
                type='button'
                onClick={() => (isFavorite === -1 ? favoriteSetMovie(item) : favoriteRemoveMovie())}
              >
                {isFavorite === -1 ? '즐겨찾기' : '해제'}
              </button>
              <button type='button' onClick={close}>
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>,
    element
  )
}

export default Modal
