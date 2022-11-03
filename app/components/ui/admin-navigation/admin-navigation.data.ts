import { IAdminNavigationData } from '@ui/admin-navigation/admin-navigation.types'
import { getAdminHomeUrl, getAdminUrl } from '@config/url.config'

export const adminNavigationItems: IAdminNavigationData[] = [
	{
		link: getAdminHomeUrl(),
		title: "Statistics"
	},
	{
		link: `${getAdminUrl("users")}`,
		title: "User"
	},
	{
		link: `${getAdminUrl("movies")}`,
		title: "Movies"
	},
	{
		link: `${getAdminUrl("actors")}`,
		title: "Actors"
	},
	{
		link: `${getAdminUrl("genres")}`,
		title: "Genres"
	}
]