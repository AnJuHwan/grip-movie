import React from 'react'
import ReactDOM from 'react-dom'
import { IMovie } from 'types/movie'
import styles from './Modal.module.scss'

interface IProps {
  show: boolean
  close: () => void
  item: IMovie
}

const Modal: React.FC<IProps> = ({ show, close, item }) => {
  const element = document.getElementById('modal') as HTMLElement
  const localFavoriteItem = localStorage.getItem('movies')

  const favoriteSetMovie = (movie: IMovie) => {
    let favoriteList = []
    favoriteList = localFavoriteItem ? JSON.parse(localFavoriteItem) : []
    favoriteList.push(movie)
    localStorage.setItem('movies', JSON.stringify(favoriteList))

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
              <button type='button' onClick={() => favoriteSetMovie(item)}>
                즐겨찾기
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
