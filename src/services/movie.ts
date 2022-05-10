import axios from 'axios'
import { IMovies } from 'types/movie'

export interface Params {
  s: string
  page: number
}

const MOVIE_BASE_URL = 'http://www.omdbapi.com'

export const getMovieData = async (params: Params): Promise<IMovies> => {
  try {
    const response = await axios.get<IMovies>(`${MOVIE_BASE_URL}/`, {
      params: {
        ...params,
        apikey: process.env.REACT_APP_MOVIE_API_KEY,
      },
    })
    const { data } = response
    return data
  } catch (error) {
    throw new Error('API 연결에 실패하였습니다.')
  }
}
