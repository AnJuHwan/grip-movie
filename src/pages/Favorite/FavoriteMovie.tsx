import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import FavoriteItem from 'components/Favorite/FavoriteItem'
import Modal from 'components/Modal/Modal'
import { movieFavoriteState } from 'store/movie'
import { IMovie } from 'types/movie'
import styles from './Favorite.module.scss'

const FavoriteMovie = () => {
  const favoriteList = useRecoilValue(movieFavoriteState)

  const [clickId, setClickId] = useState<string>('') // 클릭한 아이템의 아이디 가져옴
  const [favoriteModal, setFavoriteModal] = useState<boolean>(false) // 모달

  const movieDetail = favoriteList && favoriteList.filter((item) => item.imdbID === clickId) // 클릭한 아이디의 값저장
  const isFavorite = favoriteList.findIndex((movieItem: IMovie) => movieItem.imdbID === clickId) // 즐겨찾기 한 아이디 인덱스

  const closeModalHandler = () => {
    setFavoriteModal(false)
  }

  const openModalHandler = () => {
    setFavoriteModal(true)
  }

  return (
    <div className={styles.contents}>
      <ul className={styles.taskBox}>
        <h2 className={styles.headerText}>내 즐겨찾기</h2>
        {favoriteList &&
          favoriteList.map((movie) => (
            <FavoriteItem
              key={movie.imdbID}
              item={movie}
              openModal={openModalHandler}
              setClickId={setClickId}
              localFavoritemList={favoriteList}
            />
          ))}
      </ul>
      <Modal item={movieDetail[0]} close={closeModalHandler} show={favoriteModal} isFavorite={isFavorite} />
    </div>
  )
}

export default FavoriteMovie
