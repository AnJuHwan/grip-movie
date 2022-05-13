import React from 'react'
import { IMovie } from 'types/movie'
import styles from './Favorite.module.scss'

interface IProps {
  item: IMovie
  setClickId: (id: string) => void
  openModal: () => void
  localFavoritemList: IMovie[] | []
}

const FavoriteItem: React.FC<IProps> = ({ item, setClickId, openModal, localFavoritemList }) => {
  const isFavorite = localFavoritemList.findIndex((movieItem: IMovie) => movieItem.imdbID === item.imdbID)

  const openModalHandler = (id: string) => {
    openModal()
    setClickId(id)
  }

  return (
    <li className={styles.movieTask}>
      <button type='submit' className={styles.movieBox} onClick={() => openModalHandler(item.imdbID)}>
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
    </li>
  )
}

export default FavoriteItem
