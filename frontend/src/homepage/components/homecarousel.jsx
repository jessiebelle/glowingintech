import React from 'react'
import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import logoText from '../../static/logo-text.png'
import styles from './Picture.module.css'




const HomeCarousel = () => {
	return (
		<CCarousel controls indicators>
			<CCarouselItem>
								<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8335.jpg" alt="slide 3"/>
				<CCarouselCaption className="d-none d-md-block">
					<img src={logoText} className={styles.logoText}/>
					<h5>Empowering underrepresented people in tech</h5>
				</CCarouselCaption>
			</CCarouselItem>
			<CCarouselItem>
				<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8341.jpg" alt="slide 2"/>
				<CCarouselCaption className="d-none d-md-block">
					<h5>Building communities</h5>
				</CCarouselCaption>
			</CCarouselItem>
			<CCarouselItem>
								<CImage className="d-block w-100" src="https://s3.eu-west-2.amazonaws.com/glowingintech.com/static/Launch+Party+Pictures/588A8269.jpg" alt="The Glowing in Tech Team at an event"/>

				<CCarouselCaption className="d-none d-md-block">
					<h5>Creating resources to develop talent</h5>
				</CCarouselCaption>
			</CCarouselItem>
		</CCarousel>
	)
}
export default HomeCarousel