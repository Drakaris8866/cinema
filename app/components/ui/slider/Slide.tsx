import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ISlide } from '@ui/slider/slider.inderface'
import { useRouter } from 'next/router'
import styles from './Slider.module.scss'
import volImg from '@assets/images/volume-svgrepo-com.svg'
import { IVideoElement } from '@ui/video-player/video-player.types'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()
	const [showVideo, setShowVideo] = useState(false)
	const videoRef = useRef<IVideoElement>(null)
	useEffect(() => {
		setTimeout(() => setShowVideo(true), 2000)
		setShowVideo(false)
	}, [slide])

	const click = (event: any) => {
		if (videoRef.current) {
			videoRef.current.muted = !videoRef.current.muted
		}
		event.target.classList.toggle(`${styles.visible}`)
	}
	return (
		<div className={styles.slide}>
			{!showVideo ? (
				slide.bigPoster && (
					<Image
						fill
						className={styles.image}
						src={slide.bigPoster}
						alt={slide.title}
						draggable={false}
						unoptimized
						priority
					/>
				)
			) : (
				<>
					<video
						ref={videoRef}
						src={slide.videoUrl}
						className={styles.video}
						autoPlay
						muted={true}
						loop
					/>
					<Image className={styles.volume} src={volImg} alt="volImg" />
					<div onClick={(e) => click(e)} className={`${styles.dioLine}`} />
				</>
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
