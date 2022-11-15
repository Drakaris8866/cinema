import { IGenre } from '@shared/movies.types'

export interface IGenreEditInput extends Omit<IGenre, '_id'> {}