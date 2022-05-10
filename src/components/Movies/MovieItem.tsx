import React from 'react'
import { IMovie } from 'types/movie'
import styles from './MovieItem.module.scss'

interface IProps {
  item: IMovie
}

const MovieItem: React.FC<IProps> = ({ item }) => {
  return (
    <li className={styles.movieTask}>
      <button type='submit' className={styles.movieBox} onClick={() => console.log('click')}>
        <div className={styles.posterBox}>
          <img className={styles.poster} src={item.Poster} alt='포스터가 없습니다.' />
        </div>
        <div className={styles.detailBox}>
          <p>제목: {item.Title}</p>
          <p>연도: {item.Year}</p>
          <p>타입: {item.Type}</p>
        </div>
      </button>
    </li>
  )
}

export default MovieItem
