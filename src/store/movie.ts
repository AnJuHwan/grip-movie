import { atom } from 'recoil'
import { IMovie } from 'types/movie'

export const movieState = atom<IMovie[] | []>({
  key: 'movieListState',
  default: [],
})
