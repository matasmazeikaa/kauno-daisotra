import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Button from '@/components/Button';
import BackgroundOverlay from '@/components/BackgroundOverlay';
import './HeroSection.scss';

const HomeHeroSection = ({ hero }) => (
	<BackgroundImage
		Tag="section"
		fluid={hero.background.image.childImageSharp.fluid}
		className="hero-section-background"
	>
		<BackgroundOverlay />
		<div className="hero-section">
			<img className="hero-section__icon" src={hero.image.image.publicURL} alt={hero.image.alt} />
			<h1 className="hero-section__title">{hero.title}</h1>
			<Button isAlwaysDesktopPadding title={hero.button.title} />
		</div>
	</BackgroundImage>
);

export default HomeHeroSection;
