import Modal from 'components/Modal/Modal'
import React, { useState } from 'react'
import { IMovie } from 'types/movie'
import styles from './Favorite.module.scss'

interface IProps {
  item: IMovie
}

const FavoriteItem: React.FC<IProps> = ({ item }) => {
  const [favoriteModal, setFavoriteModal] = useState<boolean>(false)

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
        </div>
      </button>
      <Modal show={favoriteModal} close={closeModalHandler} item={item} />
    </li>
  )
}

export default FavoriteItem
