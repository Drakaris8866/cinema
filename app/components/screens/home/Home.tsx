import { FC } from 'react'
import Slider from '@ui/slider/Slider'
import { IHome } from '@screens/home/home.interface'
import Meta from '@utils/Meta/Meta'
import Heading from '@ui/heading/Heading'
import Gallery from '@ui/gallery/Gallery'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-500 mb-8 text-xl"
			/>

			{slides.length && <Slider slides={slides} />}

			<Heading title="Trending now" className="mt-8 text-xl" />

			{trendingMovies.length && (
				<Gallery items={trendingMovies} variant="vertical" />
			)}

			<Heading title="Best actors" className="mt-8 text-xl" />

			{trendingMovies.length && <Gallery items={actors} variant="vertical" />}
		</Meta>
	)
}

export default Home
