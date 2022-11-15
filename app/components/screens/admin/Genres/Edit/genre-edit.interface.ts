import { IActor, IGenre, IMovie } from '@shared/movies.types'

export interface IActorEditInput extends Omit<IActor, '_id'> {}
export interface IGenreEditInput extends Omit<IGenre, '_id'> {}
export interface IMovieEditInput extends Omit<IMovie, '_id'> {}
