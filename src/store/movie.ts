import { atom } from 'recoil'
import { IMovie } from 'types/movie'

export const movieState = atom<IMovie[] | []>({
  key: 'movieListState',
  default: [],
})

export const moviePageState = atom<number>({
  key: 'moviePageState',
  default: 1,
})

export const movieInputState = atom<string>({
  key: 'movieInputState',
  default: '',
})

export const movieFavoriteState = atom<IMovie[] | []>({
  key: 'movieFavoriteState',
  default: [],
})

export const currentLocationPage = atom<string>({
  key: 'currentLocationPage',
  default: '/',
})

export const totalResultsPage = atom<number>({
  key: 'totalResultsPage',
  default: 0,
})
