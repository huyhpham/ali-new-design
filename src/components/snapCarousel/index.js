import React, { Component } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../sliderEntry/SliderEntry.style';
import SliderEntry from '../sliderEntry/SliderEntry';
import styles, { colors } from '../../index.style';
import { ENTRIES1, ENTRIES2 } from '../../util/entries';

type Props = {

};

const SLIDER_1_FIRST_ITEM = 1;

class SnapCarousel extends Component {
	props: Props;

	constructor(props) {
		super(props);
		this.state = {
			slider1ActiveSlide: SLIDER_1_FIRST_ITEM
		};
	}

	renderItemWidthParallax = ({ item, index }, parallaxProps) => {
		return <SliderEntry
			data={item}
			even={(index + 1) % 2 === 0}
			parallax
			parallaxProps={parallaxProps}
		/>;
	};

	mainExample = () => {
		const { slider1ActiveSlide } = this.state;

		return <View>
			<Carousel
				data={ENTRIES2}
				renderItem={this.renderItemWidthParallax}
				ref={c => this.slider1Ref = c}
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
				hasParallaxImages
				firstItem={SLIDER_1_FIRST_ITEM}
				inactiveSlideScale={0.94}
				inactiveSlideOpacity={0.7}
				containerCustomStyle={styles.slider}
				contentContainerCustomStyle={styles.sliderContentContainer}
				// loop
				// loopClonesPerSide={2}
				// autoplay
				// autoplayDelay={500}
				// autoplayInterval={3000}
				onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
			/>
			<Pagination
				activeDotIndex={slider1ActiveSlide}
				dotsLength={ENTRIES1.length}
				containerStyle={styles.paginationContainer}
				dotColor="rgba(255, 255, 255, 0.92)"
				dotStyle={styles.paginationDot}
				inactiveDotColor={colors.black}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
				carouselRef={this.slider1Ref}
				tappableDots={!!this.slider1Ref}
			/>
		</View>;
	};

	get gradient() {
		return (
			<LinearGradient
				colors={[colors.background1, colors.background2]}
				startPoint={{ x: 1, y: 0 }}
				endPoint={{ x: 0, y: 1 }}
				style={styles.gradient}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.gradient}
				{this.mainExample()}
			</View>
		);
	}
}

export default SnapCarousel;
