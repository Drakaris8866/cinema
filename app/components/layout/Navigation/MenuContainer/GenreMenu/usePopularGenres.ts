import { useQuery } from 'react-query'
import { GenreService } from '@services/genres.service'
import { IMenuItem } from '@components/layout/Navigation/MenuContainer/menu.types'
import { getGenresUrl } from '@config/api.config'

export const usePopularGenres = () => {
	const queryData = useQuery('popular genres', () => GenreService.getAll(), {
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenresUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),
	})

	return queryData
}
