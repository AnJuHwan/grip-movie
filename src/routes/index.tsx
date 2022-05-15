import { Route, Routes } from 'react-router-dom'
import styles from './Routes.module.scss'
import Mobile from './shared/Mobile'
import FavoriteMovie from 'pages/Favorite/FavoriteMovie'
import Home from 'pages/Home/Home'

const RootRoute = () => {
  return (
    <div className={styles.app}>
      <Mobile>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<FavoriteMovie />} />
        </Routes>
      </Mobile>
    </div>
  )
}

export default RootRoute
