import { IMovie } from '@shared/movies.types'
import { ISlide } from '@ui/slider/slider.inderface'
import { IGalleryItem } from '@ui/gallery/gallery.interface'

export interface ISlideMovie
	extends Pick<IMovie, '_id' | 'bigPoster' | 'title' | 'genres' | 'slug'> {}

export interface IHome {
	slides: ISlide[]
	trendingMovies: IGalleryItem[]
	actors: IGalleryItem[]
}
