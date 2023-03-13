import React from 'react'
import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from "@coreui/react";



const HomeCarousel = () => {
	return (
		<CCarousel controls indicators>
			<CCarouselItem>
				<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8202.jpg" alt="slide 1"/>
				<CCarouselCaption className="d-none d-md-block">
					<h5>First slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</CCarouselCaption>
			</CCarouselItem>
			<CCarouselItem>
				<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8341.jpg" alt="slide 2"/>
				<CCarouselCaption className="d-none d-md-block">
					<h5>Second slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</CCarouselCaption>
			</CCarouselItem>
			<CCarouselItem>
				<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8335.jpg" alt="slide 3"/>
				<CCarouselCaption className="d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</CCarouselCaption>
			</CCarouselItem>
		</CCarousel>
	)
}
export default HomeCarousel