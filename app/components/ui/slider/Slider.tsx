import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Slider.module.scss'


import { useSlider } from './useSlider'
import { ISlide } from '@ui/slider/slider.inderface'
import SliderArrow from '@ui/slider/SliderArrow/SliderArrow'
import SlideItem from '@ui/slider/Slide'

interface ISlider {
	buttonTitle?: string
	slides: ISlide[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
	const { handleArrowClick, currentIndex, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			{isPrev && (
				<SliderArrow variant="left" clickHandler={() => handleArrowClick('prev')} />
			)}

			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames="slide-animation"
				unmountOnExit
			>
				<SlideItem slide={slides[currentIndex]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SliderArrow variant="right" clickHandler={() => handleArrowClick('next')} />
			)}
		</div>
	)
}

export default Slider
