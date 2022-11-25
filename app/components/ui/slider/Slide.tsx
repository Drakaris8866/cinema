import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ISlide } from '@ui/slider/slider.inderface'
import { useRouter } from 'next/router'
import styles from './Slider.module.scss'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()
	const [showVideo, setShowVideo] = useState(false)
	useEffect(() => {
		const timeout =  setTimeout(() => setShowVideo(true), 5000)
		return () => {
			clearTimeout(timeout)
			setShowVideo(false)
		}
	}, [slide])

	console.log(showVideo)
	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					fill
					className={styles.image}
					src={slide.bigPoster}
					alt={slide.title}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem