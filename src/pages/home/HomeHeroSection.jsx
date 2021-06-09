import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Section from '@/components/Section';
import './HomeHeroSection.scss';
import Button from '@/components/Button';

const HomeHeroSection = ({ hero }) => (
	<BackgroundImage
		Tag="section"
		fluid={hero.background.image.childImageSharp.fluid}
	>
		<Section className="home-hero-section">
			<h1 className="home-hero-section__title">{hero.title}</h1>
			<p className="body home-hero-section__info">{hero.description}</p>
			<Button title="Bendradarbiaukime" />
		</Section>
	</BackgroundImage>
);

export default HomeHeroSection;
