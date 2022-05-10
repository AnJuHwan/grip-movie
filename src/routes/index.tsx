import FavoriteMovie from 'pages/Movies/FavoriteMovie'
import Home from 'pages/Movies/Home'
import { Route, Routes } from 'react-router-dom'

const RootRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorite' element={<FavoriteMovie />} />
    </Routes>
  )
}

export default RootRoute
