import React from 'react'
import { IMovie } from 'types/movie'
import styles from './Favorite.module.scss'

const FavoriteMovie = () => {
  const localFavoriteItem = localStorage.getItem('movies')
  const transFormJsonItem: IMovie[] | null = localFavoriteItem && JSON.parse(localFavoriteItem)

  return (
    <div className={styles.contents}>
      <ul>
        {transFormJsonItem &&
          transFormJsonItem.map((movie) => (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default FavoriteMovie
