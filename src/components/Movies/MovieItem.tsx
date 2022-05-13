import Modal from 'components/Modal/Modal'
import React, { useState } from 'react'
import { IMovie } from 'types/movie'
import styles from './MovieItem.module.scss'

interface IProps {
  item: IMovie
}

const MovieItem: React.FC<IProps> = ({ item }) => {
  const localFavorite = localStorage.getItem('movies')
  const localFavoritemList = localFavorite ? JSON.parse(localFavorite) : []
  const [favoriteModal, setFavoriteModal] = useState<boolean>(false)
  const isFavorite = localFavoritemList.findIndex((movieItem: IMovie) => movieItem.imdbID === item.imdbID)

  const closeModalHandler = () => {
    setFavoriteModal(false)
  }

  const openModalHandler = () => {
    setFavoriteModal(true)
  }

  return (
    <li className={styles.movieTask}>
      <button type='submit' className={styles.movieBox} onClick={openModalHandler}>
        <div className={styles.posterBox}>
          <img className={styles.poster} src={item.Poster} alt='포스터가 없습니다.' />
        </div>
        <div className={styles.detailBox}>
          <p>제목: {item.Title}</p>
          <p>연도: {item.Year}</p>
          <p>타입: {item.Type}</p>
          {isFavorite !== -1 && <p>즐겨찾기 됨</p>}
        </div>
      </button>
      <Modal isFavorite={isFavorite} show={favoriteModal} close={closeModalHandler} item={item} />
    </li>
  )
}

export default MovieItem
