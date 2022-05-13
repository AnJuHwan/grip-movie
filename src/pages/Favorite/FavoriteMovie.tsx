import FavoriteItem from 'components/Favorite/FavoriteItem'
import React from 'react'
import { IMovie } from 'types/movie'
import styles from './Favorite.module.scss'

const FavoriteMovie = () => {
  const localFavoriteItem = localStorage.getItem('movies')
  const transFormJsonItem: IMovie[] | null = localFavoriteItem && JSON.parse(localFavoriteItem)

  return (
    <div className={styles.contents}>
      <ul className={styles.taskBox}>
        {transFormJsonItem && transFormJsonItem.map((movie) => <FavoriteItem key={movie.imdbID} item={movie} />)}
      </ul>
    </div>
  )
}

export default FavoriteMovie
