import { useQuery } from 'react-query'
import { GenreService } from '@services/genres.service'
import { IMenuItem } from '@components/layout/Navigation/MenuContainer/menu.types'
import { getGenreUrl } from '@config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery('popular genres', () => GenreService.getAll(), {
		select: ({ data }) =>
			data
				.filter((genre) => genre.icon)
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),
	})

	return queryData
}
